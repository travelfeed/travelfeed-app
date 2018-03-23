import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormInputComponent } from './form-input.component'
import { IconModule } from '../../components/icon/icon.module'

@NgModule({
    imports: [CommonModule, IconModule],
    declarations: [FormInputComponent],
    exports: [FormInputComponent]
})
export class FormInputModule {}
