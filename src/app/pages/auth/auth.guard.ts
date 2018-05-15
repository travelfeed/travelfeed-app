import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { Observable } from 'rxjs'
import { AuthService } from './auth.service'

@Injectable()
export class AuthGuard implements CanActivate {
    public constructor(private router: Router, private authService: AuthService) {}

    public canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['/auth/signin'])

            return false
        }

        return true
    }
}
