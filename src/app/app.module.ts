import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { ServiceWorkerModule } from '@angular/service-worker'
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { NgProgressModule } from '@ngx-progressbar/core'
import { NgProgressHttpModule } from '@ngx-progressbar/http'
import { NgProgressRouterModule } from '@ngx-progressbar/router'
import { WebStorageModule } from 'ngx-store'
import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module'
import { StyleguideModule } from './pages/styleguide/styleguide.module'
import { AuthModule } from './pages/auth/auth.module'
import { BackendModule } from './pages/backend/backend.module'
import { HomeModule } from './pages/home/home.module'
import { AppComponent } from './app.component'
import { TravelogueModule } from './pages/travelogue/travelogue.module'

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, '/assets/translations/')
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ServiceWorkerModule.register('/ngsw-worker.js', {
            enabled: environment.production,
        }),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        NgProgressModule.forRoot(),
        NgProgressHttpModule,
        NgProgressRouterModule,
        WebStorageModule,
        AppRoutingModule,
        AuthModule,
        BackendModule,
        StyleguideModule,
        HomeModule,
        TravelogueModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
