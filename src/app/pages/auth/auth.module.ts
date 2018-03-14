import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from '../../app-routing.module'
import { SignInPageModule } from './sign-in-page/sign-in-page.module'
import { DemoModule } from './demo/demo.module'
import { AuthComponent } from './auth.component'
import { AuthService } from './auth.service'
import { AuthGuard } from './auth.guard'
import { AuthInterceptor } from './auth.interceptor'

@NgModule({
    imports: [CommonModule, HttpClientModule, AppRoutingModule, SignInPageModule, DemoModule],
    declarations: [AuthComponent],
    providers: [
        AuthService,
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ]
})
export class AuthModule {}
