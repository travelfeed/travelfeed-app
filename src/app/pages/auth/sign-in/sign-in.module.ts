import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { ButtonModule } from '../../../components/button/button.module'
import { FormInputModule } from '../../../components/form-input/form-input.module'
import { SignInComponent } from './sign-in.component'

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, FormInputModule, ButtonModule],
    declarations: [SignInComponent]
})
export class SignInModule {}
