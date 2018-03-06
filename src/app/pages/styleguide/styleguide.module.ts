import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavigationModule } from '../../components/navigation/navigation.module'
import { ButtonModule } from '../../components/button/button.module'
import { FormInputModule } from '../../components/form-input/form-input.module'
import { IconModule } from '../../components/icon/icon.module'
import { ListModule } from '../../components/list/list.module'
import { ModNewsletterModule } from '../../components/mod-newsletter/mod-newsletter.module'
import { ModTravelPreviewModule } from '../../components/mod-travel-preview/mod-travel-preview.module'
import { StyleguideComponent } from './styleguide.component'

@NgModule({
    imports: [
        CommonModule,
        NavigationModule,
        ButtonModule,
        FormInputModule,
        IconModule,
        ListModule,
        ModNewsletterModule,
        ModTravelPreviewModule
    ],
    declarations: [StyleguideComponent],
    exports: []
})
export class StyleguideModule {}
