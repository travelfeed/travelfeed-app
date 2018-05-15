import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { HeadlinesModule } from '../../../components/headlines/headlines.module'
import { FormElementsModule } from '../../../components/form-elements/form-elements.module'
import { SignInComponent } from './sign-in.component'

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, HeadlinesModule, FormElementsModule],
    declarations: [SignInComponent],
})
export class SignInModule {}
