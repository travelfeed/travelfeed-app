import { FormElementsModule } from './../form-elements/form-elements.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FooterComponent } from './footer.component'
import { SharedModule } from '../../shared/shared.module'

@NgModule({
    imports: [CommonModule, SharedModule, FormElementsModule],
    declarations: [FooterComponent],
    exports: [FooterComponent],
})
export class FooterModule {}
