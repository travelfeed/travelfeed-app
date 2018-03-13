import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../auth.service'

@Component({
    selector: 'cmp-sign-in-page',
    templateUrl: './sign-in-page.component.html',
    styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {
    public signInForm: FormGroup

    public constructor(public formBuilder: FormBuilder, public authService: AuthService) {}

    public ngOnInit(): void {
        this.signInForm = this.formBuilder.group({
            username: ['testuser', Validators.required],
            password: ['testpass', Validators.required]
        })
    }

    public signin(): void {
        const { username, password } = this.signInForm.value

        this.authService.signin(username, password).subscribe(result => {
            console.log('==>', result)

            // this.signInForm.reset({
            //     username: '',
            //     password: ''
            // })
        })
    }
}
