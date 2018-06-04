import { NgModule } from '@angular/core'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { SharedModule } from '../../shared/shared.module'
import { BackendNavigationModule } from '../../components/backend-navigation/backend-navigation.module'
import { TranslationsModule } from './translations/translations.module'
import { ArticlesModule } from './articles/articles.module'
import { CountriesModule } from './countries/countries.module'
import { UsersModule } from './users/users.module'
import { AuthService } from '../auth/auth.service'
import { AuthGuard } from '../auth/auth.guard'
import { AuthInterceptor } from '../auth/auth.interceptor'
import { BackendComponent } from './backend.component'

@NgModule({
    imports: [
        SharedModule,
        BackendNavigationModule,
        TranslationsModule,
        ArticlesModule,
        CountriesModule,
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
