import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormElementsModule } from '../form-elements/form-elements.module'
import { NewsletterComponent } from './newsletter.component'

@NgModule({
    imports: [CommonModule, FormElementsModule],
    declarations: [NewsletterComponent],
    exports: [NewsletterComponent],
})
export class NewsletterModule {}
