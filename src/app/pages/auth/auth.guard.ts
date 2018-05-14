import { Injectable } from '@angular/core'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs'
import { AuthService } from './auth.service'

@Injectable()
export class AuthGuard implements CanActivate {
    public constructor(private router: Router, private authService: AuthService) {}

    public canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.isSignedIn()) {
            return true
        }

        return this.router.navigate(['/auth/signin'])
    }
}
