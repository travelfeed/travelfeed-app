import { NgModule } from '@angular/core'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { JwtHelperService } from '@auth0/angular-jwt'
import { auth } from '../../store/auth/auth.reducer'
import { AuthEffects } from '../../store/auth/auth.effects'
import { SharedModule } from '../../shared/shared.module'
import { AppRoutingModule } from '../../app-routing.module'
import { SignInModule } from './sign-in/sign-in.module'
import { SignOutPageModule } from './sign-out/sign-out.module'
import { RegistrationPageModule } from './registration/registration.module'
import { AuthComponent } from './auth.component'
import { AuthService } from './auth.service'
import { AuthGuard } from './auth.guard'
import { AuthInterceptor } from './auth.interceptor'

export function jwtHelperServiceFactory() {
    return new JwtHelperService()
}

@NgModule({
    imports: [
        StoreModule.forFeature('auth', auth),
        EffectsModule.forFeature([AuthEffects]),
        SharedModule,
        HttpClientModule,
        AppRoutingModule,
        SignInModule,
        SignOutPageModule,
        RegistrationPageModule,
    ],
    declarations: [AuthComponent],
    providers: [
        AuthService,
        AuthGuard,
        {
            provide: JwtHelperService,
            useFactory: jwtHelperServiceFactory,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ],
})
export class AuthModule {}
