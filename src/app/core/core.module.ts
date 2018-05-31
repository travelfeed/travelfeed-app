import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'
import { NgProgressModule } from '@ngx-progressbar/core'
import { NgProgressHttpModule } from '@ngx-progressbar/http'
import { NgProgressRouterModule } from '@ngx-progressbar/router'
import { AgmCoreModule } from '@agm/core'
import { WebStorageModule } from 'ngx-store'
import { environment } from '../../environments/environment'
import { reducers } from '../store'
import { LanguagesEffects } from '../store/languages'

@NgModule({
    declarations: [],
    imports: [
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument(),
        EffectsModule.forRoot([LanguagesEffects]),
        NgProgressModule.forRoot(),
        NgProgressHttpModule,
        NgProgressRouterModule,
        AgmCoreModule.forRoot({
            apiKey: environment.mapsApiKey,
        }),
        WebStorageModule,
    ],
    exports: [NgProgressModule],
    providers: [],
})
export class CoreModule {}
