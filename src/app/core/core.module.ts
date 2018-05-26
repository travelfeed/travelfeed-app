import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { NgProgressModule } from '@ngx-progressbar/core'
import { NgProgressHttpModule } from '@ngx-progressbar/http'
import { NgProgressRouterModule } from '@ngx-progressbar/router'
import { AgmCoreModule } from '@agm/core'
import { WebStorageModule } from 'ngx-store'
import { environment } from '../../environments/environment'

@NgModule({
    declarations: [],
    imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
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
