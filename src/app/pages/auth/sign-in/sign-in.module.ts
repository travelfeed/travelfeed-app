import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { FormElementsModule } from '../../../components/form-elements/form-elements.module'
import { SignInComponent } from './sign-in.component'

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, FormElementsModule],
    declarations: [SignInComponent],
})
export class SignInModule {}
