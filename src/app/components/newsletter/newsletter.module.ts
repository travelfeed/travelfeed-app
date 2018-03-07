import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ButtonModule } from '../button/button.module'
import { NewsletterComponent } from './newsletter.component'

@NgModule({
    imports: [CommonModule, ButtonModule],
    declarations: [NewsletterComponent],
    exports: [NewsletterComponent]
})
export class NewsletterModule {}
