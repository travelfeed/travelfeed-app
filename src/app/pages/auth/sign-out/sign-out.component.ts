import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { AuthState } from '../../../store/auth/auth.reducer'
import { AuthService } from '../auth.service'
import { AuthAction, AuthActionTypes } from '../../../store/auth/auth.action'

@Component({
    selector: 'cmp-sign-out',
    templateUrl: './sign-out.component.html',
    styleUrls: ['./sign-out.component.scss'],
})
export class SignOutComponent implements OnInit {
    public state$: Observable<AuthState> = this.store.pipe(select('auth'))

    public constructor(
        private location: Location,
        private store: Store<AuthState>,
        public authService: AuthService,
    ) {}

    public ngOnInit(): void {
        if (!this.authService.isAuthenticated()) {
            this.signout()
        }
    }

    public back(): void {
        this.location.back()
    }

    public signout(): void {
        this.store.dispatch<AuthAction>({
            type: AuthActionTypes.SIGN_OUT,
        })
    }
}
