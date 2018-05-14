import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { HeadlinesModule } from '../../components/headlines/headlines.module'
import { ContainerModule } from '../../components/container/container.module'
import { NavigationModule } from '../../components/navigation/navigation.module'
import { FormElementsModule } from '../../components/form-elements/form-elements.module'
import { IconModule } from '../../components/icon/icon.module'
import { ListModule } from '../../components/list/list.module'
import { NewsletterModule } from '../../components/newsletter/newsletter.module'
import { TravelPreviewModule } from '../../components/travel-preview/travel-preview.module'
import { CountryPreviewModule } from '../../components/country-preview/country-preview.module'
import { StyleguideComponent } from './styleguide.component'

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HeadlinesModule,
        ContainerModule,
        NavigationModule,
        FormElementsModule,
        IconModule,
        ListModule,
        NewsletterModule,
        TravelPreviewModule,
        CountryPreviewModule,
    ],
    declarations: [StyleguideComponent],
    exports: [],
})
export class StyleguideModule {}
