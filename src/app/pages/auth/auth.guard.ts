import { Injectable } from '@angular/core'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs/Observable'
import { tap } from 'rxjs/operators'
import { AuthService } from './auth.service'

@Injectable()
export class AuthGuard implements CanActivate {
    public constructor(private router: Router, private authService: AuthService) {}

    public canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isSignedIn().pipe(
            tap(allowed => {
                if (!allowed) {
                    this.router.navigate(['/auth/signin'])
                }
            })
        )
    }
}
