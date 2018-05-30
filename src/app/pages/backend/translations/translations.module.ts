import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { translations, TranslationsEffects } from '../../../store/translations'
import { SharedModule } from '../../../shared/shared.module'
import { FormElementsModule } from '../../../components/form-elements/form-elements.module'
import { HeadlinesModule } from '../../../components/headlines/headlines.module'
import { IconModule } from '../../../components/icon/icon.module'
import { TranslationsComponent } from './translations.component'
import { TranslationsOverviewComponent } from './translations-overview/translations-overview.component'
import { TranslationsViewComponent } from './translations-view/translations-view.component'
import { TranslationsService } from './translations.service'
import { TranslationsItemComponent } from './translations-item/translations-item.component'

@NgModule({
    imports: [
        ReactiveFormsModule,
        StoreModule.forFeature('translations', translations),
        EffectsModule.forFeature([TranslationsEffects]),
        SharedModule,
        FormElementsModule,
        HeadlinesModule,
        IconModule,
    ],
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
