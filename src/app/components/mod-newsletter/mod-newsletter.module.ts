import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ButtonModule } from '../button/button.module'
import { ModNewsletterComponent } from './mod-newsletter.component'

@NgModule({
    imports: [CommonModule, ButtonModule],
    declarations: [ModNewsletterComponent],
    exports: [ModNewsletterComponent]
})
export class ModNewsletterModule {}
