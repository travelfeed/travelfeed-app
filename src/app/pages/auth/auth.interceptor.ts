import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http'
import { NgProgress } from '@ngx-progressbar/core'
import { Observable, throwError, of } from 'rxjs'
import { catchError, switchMap, filter, delayWhen, map } from 'rxjs/operators'
import { environment } from '../../../environments/environment'
import { NetworkService } from '../../shared/network/network.service'
import { AuthService } from './auth.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    /**
     * Initializes the API auth interceptor service.
     *
     * @param {Router} router
     * @param {AuthService} authService
     */
    public constructor(
        private router: Router,
        private networkService: NetworkService,
        private authService: AuthService,
        private progressService: NgProgress,
    ) {}

    /**
     * Catch all failed requests and tries to refresh the auth if possible.
     *
     * @param {HttpRequest<any>} request
     * @param {HttpHandler} next
     * @returns {Observable<any>}
     */
    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        // cache requests while we are offline
        if (
            environment.production &&
            !this.networkService.online &&
            this.authService.isAuthenticated()
        ) {
            return of(null).pipe(
                map(() => this.progressService.complete()),
                delayWhen(() => this.networkService.online$.pipe(filter(online => !!online))),
                switchMap(() => this.handleRequest(request, next)),
                catchError(error => {
                    return throwError(error)
                }),
            )
        }

        // catch auth errors and retry
        return this.handleRequest(request, next).pipe(
            catchError(error => {
                if (error instanceof HttpErrorResponse) {
                    switch (error.status) {
                        case 401:
                            return this.invalidateToken(error)
                        case 403:
                            return this.refreshToken(request, next)
                    }
                }

                return throwError(error)
            }),
        )
    }

    /**
     * Handles the request and injects the auth token.
     *
     * @param {HttpRequest<any>} request
     * @param {HttpHandler} next
     */
    private handleRequest(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        this.progressService.start()
        return next.handle(this.injectToken(request)).pipe(
            map(response => {
                this.progressService.set(100)
                return response
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
        if (!this.authService.isAuthenticated()) {
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
        this.authService.userId = null
        this.authService.authToken = null
        this.authService.refreshToken = null

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
                switchMap(() => this.handleRequest(request, next)),
                catchError(error => this.invalidateToken(error)),
            )
    }
}
