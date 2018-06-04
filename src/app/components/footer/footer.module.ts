import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { LanguageSwitchModule } from '../language-switch/language-switch.module'
import { FooterComponent } from './footer.component'

@NgModule({
    imports: [SharedModule, LanguageSwitchModule],
    declarations: [FooterComponent],
    exports: [FooterComponent],
})
export class FooterModule {}
