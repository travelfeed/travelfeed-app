import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { FormElementsModule } from '../../../components/form-elements/form-elements.module'
import { HeadlinesModule } from '../../../components/headlines/headlines.module'
import { IconModule } from '../../../components/icon/icon.module'
import { TranslationsComponent } from './translations.component'
import { TranslationsOverviewComponent } from './translations-overview/translations-overview.component'
import { TranslationsViewComponent } from './translations-view/translations-view.component'
import { TranslationsService } from './translations.service'
import { TranslationsItemComponent } from './translations-item/translations-item.component'

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, FormElementsModule, HeadlinesModule, IconModule],
    declarations: [
        TranslationsComponent,
        TranslationsOverviewComponent,
        TranslationsViewComponent,
        TranslationsItemComponent,
    ],
    exports: [TranslationsComponent],
    providers: [TranslationsService],
})
export class TranslationsModule {}
