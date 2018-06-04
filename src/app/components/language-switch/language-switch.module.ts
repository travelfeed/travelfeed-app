import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { FormElementsModule } from '../form-elements/form-elements.module'
import { LanguageSwitchComponent } from './language-switch.component'

@NgModule({
    imports: [SharedModule, FormElementsModule],
    declarations: [LanguageSwitchComponent],
    exports: [LanguageSwitchComponent],
})
export class LanguageSwitchModule {}
