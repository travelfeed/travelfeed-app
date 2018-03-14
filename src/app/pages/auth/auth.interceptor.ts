import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { AuthService } from './auth.service'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    public constructor(private authService: AuthService) {}

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { userId, authToken } = this.authService

        if (userId !== null && authToken !== null) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${authToken}`
                }
            })
        }

        return next.handle(request)
    }
}
