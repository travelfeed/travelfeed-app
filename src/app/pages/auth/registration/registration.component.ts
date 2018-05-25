import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup } from '@angular/forms'
import { takeWhile } from 'rxjs/operators'
import { AuthService } from '../auth.service'
import { FValidationConfig } from '../../../components/form-elements/typings'

@Component({
    selector: 'cmp-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit, OnDestroy {
    public registrationForm: FormGroup

    public validation: FValidationConfig = {
        username: [
            {
                type: 'required',
                message: 'AUTH_REGISTER_FORM_USERNAME_VALIDATION_REQUIRED',
            },
        ],
        email: [
            {
                type: 'required',
                message: 'AUTH_REGISTER_FORM_EMAIL_VALIDATION_REQUIRED',
            },
            {
                type: 'email',
                message: 'AUTH_REGISTER_FORM_EMAIL_VALIDATION_EMAIL',
            },
        ],
        password: [
            {
                type: 'required',
                message: 'AUTH_REGISTER_FORM_PASSWORD_VALIDATION_REQUIRED',
            },
            {
                type: 'minLength',
                value: 8,
                message: 'AUTH_REGISTER_FORM_PASSWORD_VALIDATION_MIN_LENGTH',
            },
            {
                type: 'maxLength',
                value: 30,
                message: 'AUTH_REGISTER_FORM_PASSWORD_VALIDATION_MAX_LENGTH',
            },
            {
                type: 'pattern',
                value: '^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9<!{,=~)]+)$',
                message: 'AUTH_REGISTER_FORM_PASSWORD_VALIDATION_PATTERN',
            },
        ],
    }

    private alive: boolean = true

    public constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private router: Router,
        private formBuilder: FormBuilder,
        public authService: AuthService,
    ) {}

    public ngOnInit(): void {
        this.registrationForm = this.formBuilder.group({
            username: null,
            password: null,
            email: null,
        })
        this.changeDetectorRef.detectChanges()
    }

    public ngOnDestroy(): void {
        this.alive = false
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

    public register(): void {
        const { username, password, email } = this.registrationForm.value

        this.authService
            .register(username, password, email)
            .pipe(takeWhile(() => this.alive))
            .subscribe(() => {
                this.router.navigate(['/auth'])
            })
    }
}
