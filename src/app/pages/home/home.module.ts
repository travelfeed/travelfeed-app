import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { FormElementsModule } from '../../components/form-elements/form-elements.module'
import { NavigationModule } from '../../components/navigation/navigation.module'
import { ContainerModule } from '../../components/container/container.module'
import { TravelPreviewModule } from '../../components/travel-preview/travel-preview.module'
import { CountryPreviewModule } from '../../components/country-preview/country-preview.module'
import { HomeComponent } from './home.component'

@NgModule({
    imports: [
        SharedModule,
        NavigationModule,
        ContainerModule,
        TravelPreviewModule,
        CountryPreviewModule,
        FormElementsModule,
    ],
    declarations: [HomeComponent],
    exports: [],
})
export class HomeModule {}
