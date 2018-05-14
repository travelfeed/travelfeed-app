import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from '../../app-routing.module'
import { SignInModule } from './sign-in/sign-in.module'
import { SignOutPageModule } from './sign-out/sign-out.module'
import { RegistrationPageModule } from './registration/registration.module'
import { AuthComponent } from './auth.component'
import { AuthService } from './auth.service'
import { AuthGuard } from './auth.guard'
import { AuthInterceptor } from './auth.interceptor'

@NgModule({
    imports: [
        CommonModule,
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
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ],
})
export class AuthModule {}
