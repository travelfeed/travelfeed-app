import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../auth.service'

@Component({
    selector: 'cmp-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    public registrationForm: FormGroup

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

    public register(): void {
        const { username, password, email } = this.registrationForm.value

        this.authService.register(username, password, email).subscribe(result => {
            this.router.navigate(['/auth'])
        })
    }
}
