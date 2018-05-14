import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { FormElementsModule } from '../../../components/form-elements/form-elements.module'
import { RegistrationComponent } from './registration.component'

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, FormElementsModule],
    declarations: [RegistrationComponent],
})
export class RegistrationPageModule {}
