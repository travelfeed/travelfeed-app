import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { CountriesEffects, countries } from '../../../store/countries'
import { SharedModule } from '../../../shared/shared.module'
import { FormElementsModule } from '../../../components/form-elements/form-elements.module'
import { HeadlinesModule } from '../../../components/headlines/headlines.module'
import { IconModule } from '../../../components/icon/icon.module'
import { CountriesComponent } from './countries.component'
import { CountriesListComponent } from './countries-list/countries-list.component'
import { CountriesItemComponent } from './countries-item/countries-item.component'
import { CountriesDetailsComponent } from './countries-details/countries-details.component'
import { CountriesService } from './countries.service'

@NgModule({
    imports: [
        StoreModule.forFeature('countries', countries),
        EffectsModule.forFeature([CountriesEffects]),
        SharedModule,
        FormElementsModule,
        HeadlinesModule,
        IconModule,
    ],
    declarations: [
        CountriesComponent,
        CountriesListComponent,
        CountriesItemComponent,
        CountriesDetailsComponent,
    ],
    exports: [CountriesComponent],
    providers: [CountriesService],
})
export class CountriesModule {}
