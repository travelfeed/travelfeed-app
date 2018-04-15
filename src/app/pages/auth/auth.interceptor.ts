import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { AuthService } from './auth.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    public constructor(private authService: AuthService) {}

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.authService.isSignedIn()) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.authService.authToken}`
                }
            })
        }

        return next.handle(request)
    }
}
