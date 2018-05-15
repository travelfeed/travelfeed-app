import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { filter, catchError, switchMap } from 'rxjs/operators'
import { AuthService } from './auth.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    /**
     * Initializes the API auth interceptor service.
     *
     * @param {Router} router
     * @param {AuthService} authService
     */
    public constructor(private router: Router, private authService: AuthService) {}

    /**
     * Catch all failed requests and tries to refresh the auth if possible.
     *
     * @param {HttpRequest<any>} request
     * @param {HttpHandler} next
     * @returns {Observable<any>}
     */
    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        return next.handle(this.injectToken(request)).pipe(
            filter(response => response instanceof HttpErrorResponse),
            catchError(error => {
                switch (error.status) {
                    case 401:
                        return this.invalidateToken(error)
                    case 403:
                        return this.refreshToken(request, next)
                }

                return throwError(error)
            }),
        )
    }

    /**
     * Injects the auth token to the given request.
     *
     * @param {HttpRequest<any>} request
     * @returns {HttpRequest<any>}
     */
    private injectToken(request: HttpRequest<any>): HttpRequest<any> {
        if (!this.authService.isSignedIn()) {
            return request
        }

        return request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.authService.authToken}`,
            },
        })
    }

    /**
     * Invalidates the current auth and redirects to the sign in page.
     *
     * @param {HttpErrorResponse} error
     * @returns {Observable<any>}
     */
    private invalidateToken(error: HttpErrorResponse): Observable<any> {
        this.authService.userId = ''
        this.authService.authToken = ''
        this.authService.refreshToken = ''

        this.router.navigate(['/auth/signin'])

        return throwError(error)
    }

    /**
     * Tries to refresh the auth token using the refresh token.
     *
     * @param {HttpRequest<any>} request
     * @param {HttpHandler} next
     * @returns {Observable<any>}
     */
    private refreshToken(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        return this.authService
            .refresh()
            .pipe(
                switchMap(() => next.handle(this.injectToken(request))),
                catchError(error => this.invalidateToken(error)),
            )
    }
}
