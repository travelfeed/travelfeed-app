import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { NgProgressModule } from '@ngx-progressbar/core'
import { NgProgressHttpModule } from '@ngx-progressbar/http'
import { NgProgressRouterModule } from '@ngx-progressbar/router'
import { WebStorageModule } from 'ngx-store'

@NgModule({
    declarations: [],
    imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        NgProgressModule.forRoot(),
        NgProgressHttpModule,
        NgProgressRouterModule,
        WebStorageModule,
    ],
    exports: [NgProgressModule],
    providers: [],
})
export class CoreModule {}
