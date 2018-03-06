import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module'
import { StyleguideModule } from './pages/styleguide/styleguide.module'
import { AppComponent } from './app.component'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        ServiceWorkerModule.register('/ngsw-worker.js', {
            enabled: environment.production
        }),
        AppRoutingModule,
        StyleguideModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
