import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from '../../app-routing.module'
import { BackendNotificationsModule } from '../../components/backend-notifications/backend-notifications.module'
import { BackendNavigationModule } from '../../components/backend-navigation/backend-navigation.module'
import { TranslationsModule } from './translations/translations.module'
import { ArticlesModule } from './articles/articles.module'
import { UsersModule } from './users/users.module'
import { AuthService } from '../auth/auth.service'
import { AuthGuard } from '../auth/auth.guard'
import { AuthInterceptor } from '../auth/auth.interceptor'
import { BackendComponent } from './backend.component'

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        BackendNotificationsModule,
        BackendNavigationModule,
        TranslationsModule,
        ArticlesModule,
        UsersModule,
    ],
    declarations: [BackendComponent],
    providers: [
        AuthService,
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ],
})
export class BackendModule {}
