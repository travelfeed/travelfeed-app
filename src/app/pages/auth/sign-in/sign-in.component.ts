import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { takeWhile } from 'rxjs/operators'
import { AuthService } from '../auth.service'
import { FValidationConfig } from '../../../components/form-elements/typings'

@Component({
    selector: 'cmp-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
    public signInForm: FormGroup

    public validation: FValidationConfig = {
        email: [
            {
                type: 'required',
                message: 'AUTH_SIGN_IN_FORM_EMAIL_VALIDATION_REQUIRED'
            },
            {
                type: 'email',
                message: 'AUTH_SIGN_IN_FORM_EMAIL_VALIDATION_EMAIL'
            }
        ],
        password: [
            {
                type: 'required',
                message: 'AUTH_SIGN_IN_FORM_PASSWORD_VALIDATION_REQUIRED'
            },
            {
                type: 'minLength',
                value: 8,
                message: 'AUTH_SIGN_IN_FORM_PASSWORD_VALIDATION_MIN_LENGTH'
            },
            {
                type: 'pattern',
                value: '(?=^.{8,}$)((?=.*d)|(?=.*W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$',
                message: 'AUTH_SIGN_IN_FORM_PASSWORD_VALIDATION_PATTERN'
            }
        ]
    }

    private alive: boolean = true

    public constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private router: Router,
        private formBuilder: FormBuilder,
        public authService: AuthService
    ) {}

    public ngOnInit(): void {
        this.signInForm = this.formBuilder.group({
            email: null,
            password: null
        })
        this.changeDetectorRef.detectChanges()

        if (this.authService.isSignedIn()) {
            this.router.navigate(['../backend'])
        }
    }

    public ngOnDestroy(): void {
        this.alive = false
    }

    public get email() {
        return this.signInForm.get('email')
    }

    public get password() {
        return this.signInForm.get('password')
    }

    public signin(): void {
        const { email, password } = this.signInForm.value

        this.authService
            .signin(email, password)
            .pipe(takeWhile(() => this.alive))
            .subscribe(result => {
                this.router.navigate(['../backend'])
            })
    }
}
