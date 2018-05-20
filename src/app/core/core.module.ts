import { NgModule } from '@angular/core'
import { NgProgressModule } from '@ngx-progressbar/core'
import { NgProgressHttpModule } from '@ngx-progressbar/http'
import { NgProgressRouterModule } from '@ngx-progressbar/router'
import { WebStorageModule } from 'ngx-store'

@NgModule({
    declarations: [],
    imports: [
        NgProgressModule.forRoot(),
        NgProgressHttpModule,
        NgProgressRouterModule,
        WebStorageModule,
    ],
    exports: [NgProgressModule],
    providers: [],
})
export class CoreModule {}
