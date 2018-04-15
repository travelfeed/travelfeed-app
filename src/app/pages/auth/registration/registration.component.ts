import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { takeWhile } from 'rxjs/operators'
import { AuthService } from '../auth.service'
import { RegistrationFormModel } from './typings'

@Component({
    selector: 'cmp-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {
    public registrationForm: FormGroup

    public model: RegistrationFormModel = {
        username: '',
        email: '',
        password: ''
    }

    private alive: boolean = true

    public constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        public authService: AuthService
    ) {}

    public ngOnInit(): void {
        this.registrationForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]]
        })
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
            .subscribe(result => {
                this.router.navigate(['/auth'])
            })
    }
}
