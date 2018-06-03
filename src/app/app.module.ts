import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ServiceWorkerModule } from '@angular/service-worker'
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { AppRoutingModule } from './app-routing.module'
import { CoreModule } from './core/core.module'
import { NotificationModule } from './components/notification/notification.module'
import { AuthModule } from './pages/auth/auth.module'
import { BackendModule } from './pages/backend/backend.module'
import { HomeModule } from './pages/home/home.module'
import { StyleguideModule } from './pages/styleguide/styleguide.module'
import { TravelogueModule } from './pages/travelogue/travelogue.module'
import { environment } from '../environments/environment'
import { AppComponent } from './app.component'
import { ImpressumModule } from './pages/impressum/impressum.module'

export function translationLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, `${environment.apiBaseUrl}/translation/`, '')
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ServiceWorkerModule.register('/ngsw-worker.js', {
            enabled: environment.production,
        }),
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: translationLoaderFactory,
                deps: [HttpClient],
            },
        }),
        AppRoutingModule,
        CoreModule,
        NotificationModule,
        AuthModule,
        BackendModule,
        HomeModule,
        StyleguideModule,
        TravelogueModule,
        ImpressumModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
