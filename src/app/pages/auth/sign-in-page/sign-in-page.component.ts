import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../auth.service'

@Component({
    selector: 'cmp-sign-in-page',
    templateUrl: './sign-in-page.component.html',
    styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {
    public signInForm: FormGroup

    public constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        public authService: AuthService
    ) {}

    public ngOnInit(): void {
        this.signInForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    public signin(): void {
        const { username, password } = this.signInForm.value

        this.authService.signin(username, password).subscribe(result => {
            this.router.navigate(['/auth'])
        })
    }
}
