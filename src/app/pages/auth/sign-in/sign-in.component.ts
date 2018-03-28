import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../auth.service'

@Component({
    selector: 'cmp-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
    public signInForm: FormGroup

    public constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        public authService: AuthService
    ) {}

    public ngOnInit(): void {
        this.authService.isSignedIn().subscribe((authenticated: boolean) => {
            if (authenticated) {
                this.router.navigate(['../backend'])
            }
        })

        this.signInForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    public signin(): void {
        const { email, password } = this.signInForm.value

        this.authService.signin(email, password).subscribe(result => {
            this.router.navigate(['/auth'])
        })
    }
}
