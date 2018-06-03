import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { HeadlinesModule } from '../../components/headlines/headlines.module'
import { ContainerModule } from '../../components/container/container.module'
import { NavigationModule } from '../../components/navigation/navigation.module'
import { FormElementsModule } from '../../components/form-elements/form-elements.module'
import { IconModule } from '../../components/icon/icon.module'
import { ListModule } from '../../components/list/list.module'
import { TravelPreviewModule } from '../../components/travel-preview/travel-preview.module'
import { StyleguideComponent } from './styleguide.component'

@NgModule({
    imports: [
        SharedModule,
        HeadlinesModule,
        ContainerModule,
        NavigationModule,
        FormElementsModule,
        IconModule,
        ListModule,
        TravelPreviewModule,
    ],
    declarations: [StyleguideComponent],
    exports: [],
})
export class StyleguideModule {}
