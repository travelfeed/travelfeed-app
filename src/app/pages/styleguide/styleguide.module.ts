import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeadlinesModule } from '../../components/headlines/headlines.module'
import { ContainerModule } from '../../components/container/container.module'
import { NavigationModule } from '../../components/navigation/navigation.module'
import { ButtonModule } from '../../components/button/button.module'
import { FormInputModule } from '../../components/form-input/form-input.module'
import { IconModule } from '../../components/icon/icon.module'
import { ListModule } from '../../components/list/list.module'
import { NewsletterModule } from '../../components/newsletter/newsletter.module'
import { TravelPreviewModule } from '../../components/travel-preview/travel-preview.module'
import { LoginModule } from '../../components/login/login.module'
import { StyleguideComponent } from './styleguide.component'

@NgModule({
    imports: [
        CommonModule,
        HeadlinesModule,
        ContainerModule,
        NavigationModule,
        ButtonModule,
        FormInputModule,
        IconModule,
        ListModule,
        NewsletterModule,
        TravelPreviewModule,
        LoginModule
    ],
    declarations: [StyleguideComponent],
    exports: []
})
export class StyleguideModule {}
