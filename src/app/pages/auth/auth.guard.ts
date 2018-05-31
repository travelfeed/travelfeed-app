import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { Store, select } from '@ngrx/store'
import { Observable, of } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { AuthState, AuthAction, AuthActionTypes } from '../../store/auth'
import { AuthService } from './auth.service'
import { UsersService } from '../backend/users/users.service'

@Injectable()
export class AuthGuard implements CanActivate {
    public state$: Observable<AuthState> = this.store.pipe(select('auth'))

    public constructor(
        private store: Store<AuthState>,
        private router: Router,
        private authService: AuthService,
        private usersService: UsersService,
    ) {}

    public canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        return this.state$.pipe(
            switchMap((state: AuthState) => {
                // redirect non authenticated users to sign in page
                if (!this.authService.isAuthenticated()) {
                    this.router.navigate(['/auth/signin'])

                    return of(false)
                }

                // redirect regular user to home page
                if (!this.authService.isAdmin()) {
                    this.router.navigate(['/'])
                    return of(false)
                }

                // persist user identity
                if (!state.user) {
                    return this.usersService.fetch(this.authService.userId).pipe(
                        switchMap(response => {
                            this.store.dispatch<AuthAction>({
                                type: AuthActionTypes.PERSIST_USER,
                                payload: response.data,
                            })

                            return of(true)
                        }),
                    )
                }

                return of(true)
            }),
        )
    }
}
