import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormInputComponent } from './form-input.component'

@NgModule({
    imports: [CommonModule],
    declarations: [FormInputComponent],
    exports: [FormInputComponent]
})
export class FormInputModule {}
