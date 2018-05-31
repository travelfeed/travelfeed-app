import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, Effect } from '@ngrx/effects'
import { of } from 'rxjs'
import { map, catchError, switchMap } from 'rxjs/operators'
import { NotificationService } from '../../shared/notification/notification.service'
import {
    AuthActionTypes,
    SignIn,
    SignInSuccess,
    SignInFail,
    SignOutSuccess,
    SignOutFail,
    Register,
    RegisterSuccess,
    RegisterFail,
} from './auth.action'
import { fromActionType } from '../helpers'
import { AuthService } from '../../pages/auth/auth.service'
import { UsersService } from '../../pages/backend/users/users.service'

@Injectable()
export class AuthEffects {
    @Effect()
    public signin$ = this.actions$.pipe(
        fromActionType(AuthActionTypes.SIGN_IN, (action: SignIn) => {
            return this.authService.signin(action.payload.email, action.payload.password).pipe(
                switchMap(response => this.usersService.fetch(response.data.userId)),
                map(response => new SignInSuccess(response.data)),
                catchError(({ error }) => {
                    this.notificationService.error(`Error during sign in: ${error.message}!`)
                    return of(new SignInFail())
                }),
            )
        }),
    )

    @Effect({ dispatch: false })
    public signinSuccess$ = this.actions$.pipe(
        fromActionType(AuthActionTypes.SIGN_IN_SUCCESS, () => {
            if (this.authService.isAdmin()) {
                return this.router.navigate(['../backend'])
            }

            return this.router.navigate(['/'])
        }),
    )

    @Effect()
    public signout$ = this.actions$.pipe(
        fromActionType(AuthActionTypes.SIGN_OUT, () => {
            return this.authService.signout().pipe(
                map(() => new SignOutSuccess()),
                catchError(({ error }) => {
                    this.notificationService.error(`Error during sign out: ${error.message}!`)
                    return of(new SignOutFail())
                }),
            )
        }),
    )

    @Effect({ dispatch: false })
    public signoutSuccess$ = this.actions$.pipe(
        fromActionType(AuthActionTypes.SIGN_OUT_SUCCESS, () => {
            this.notificationService.error('Successfully signed out!')
            return this.router.navigate(['/auth/signin'])
        }),
    )

    @Effect()
    public register$ = this.actions$.pipe(
        fromActionType(AuthActionTypes.REGISTER, (action: Register) => {
            return this.authService
                .register(action.payload.username, action.payload.email, action.payload.password)
                .pipe(
                    map(() => new RegisterSuccess(action.payload)),
                    catchError(({ error }) => {
                        this.notificationService.error(`Error during registration: ${error.message}!`)
                        return of(new RegisterFail())
                    }),
                )
        }),
    )

    @Effect()
    public registerSuccess$ = this.actions$.pipe(
        fromActionType(AuthActionTypes.REGISTER_SUCCESS, (action: RegisterSuccess) => {
            return of(new SignIn(action.payload))
        }),
    )

    public constructor(
        private router: Router,
        private actions$: Actions,
        private notificationService: NotificationService,
        private authService: AuthService,
        private usersService: UsersService,
    ) {}
}
