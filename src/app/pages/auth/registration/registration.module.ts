import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { RegistrationComponent } from './registration.component'

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [RegistrationComponent]
})
export class RegistrationPageModule {}
