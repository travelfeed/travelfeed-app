import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { takeWhile } from 'rxjs/operators'
import { AuthService } from '../auth.service'
import { SignInFormModel } from './typings'

@Component({
    selector: 'cmp-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
    public signInForm: FormGroup

    public model: SignInFormModel = {
        email: '',
        password: ''
    }

    private alive: boolean = true

    public constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        public authService: AuthService
    ) {
        this.signInForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: [
                '',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(30),
                    Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9<!{,=~)]+)$')
                ]
            ]
        })
    }

    public ngOnInit(): void {
        this.authService.isSignedIn().subscribe((authenticated: boolean) => {
            if (authenticated) {
                this.router.navigate(['../backend'])
            }
        })
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
                this.router.navigate(['/auth'])
            })
    }
}
