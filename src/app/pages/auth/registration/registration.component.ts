import { Component, OnInit, ChangeDetectorRef } from '@angular/core'
import { Location } from '@angular/common'
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms'
import { Store } from '@ngrx/store'
import { AuthState } from '../../../store/auth/auth.reducer'
import { AuthService } from '../auth.service'
import { AuthAction, AuthActionTypes } from '../../../store/auth/auth.action'
import { FValidationConfig } from '../../../components/form-elements/typings'

@Component({
    selector: 'cmp-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
    public registrationForm: FormGroup

    public validation: FValidationConfig = {
        username: [
            {
                type: 'required',
                message: 'AUTH_REGISTRATION_FORM_USERNAME_VALIDATION_REQUIRED',
            },
        ],
        email: [
            {
                type: 'required',
                message: 'AUTH_REGISTRATION_FORM_EMAIL_VALIDATION_REQUIRED',
            },
            {
                type: 'email',
                message: 'AUTH_REGISTRATION_FORM_EMAIL_VALIDATION_EMAIL',
            },
        ],
        password: [
            {
                type: 'required',
                message: 'AUTH_REGISTRATION_FORM_PASSWORD_VALIDATION_REQUIRED',
            },
            {
                type: 'minLength',
                value: 8,
                message: 'AUTH_REGISTRATION_FORM_PASSWORD_VALIDATION_MIN_LENGTH',
            },
            {
                type: 'maxLength',
                value: 30,
                message: 'AUTH_REGISTRATION_FORM_PASSWORD_VALIDATION_MAX_LENGTH',
            },
            {
                type: 'pattern',
                value: '^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9<!{,=~)]+)$',
                message: 'AUTH_REGISTRATION_FORM_PASSWORD_VALIDATION_PATTERN',
            },
        ],
        passwordrepeat: [
            {
                type: 'required',
                message: 'AUTH_REGISTRATION_FORM_PASSWORD_REPEAT_VALIDATION_REQUIRED',
            },
            {
                type: 'function',
                value: (control: AbstractControl) => {
                    if (this.password.value !== control.value) {
                        return {
                            function: true,
                        }
                    }

                    return null
                },
                message: 'AUTH_REGISTRATION_FORM_PASSWORD_REPEAT_VALIDATION_MATCH_PASSWORD',
            },
        ],
    }

    public constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private location: Location,
        private formBuilder: FormBuilder,
        private store: Store<AuthState>,
        public authService: AuthService,
    ) {}

    public ngOnInit(): void {
        this.registrationForm = this.formBuilder.group({
            username: null,
            email: null,
            password: null,
            passwordrepeat: null,
        })
        this.changeDetectorRef.detectChanges()
    }

    public get username() {
        return this.registrationForm.get('username')
    }

    public get email() {
        return this.registrationForm.get('email')
    }

    public get password() {
        return this.registrationForm.get('password')
    }

    public get passwordrepeat() {
        return this.registrationForm.get('passwordrepeat')
    }

    public back(): void {
        this.location.back()
    }

    public register(): void {
        const { username, password, email } = this.registrationForm.value

        this.store.dispatch<AuthAction>({
            type: AuthActionTypes.REGISTER,
            payload: { username, email, password },
        })
    }
}
