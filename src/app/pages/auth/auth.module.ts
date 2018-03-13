import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from '../../app-routing.module'
import { AuthComponent } from './auth.component'
import { AuthService } from './auth.service'
import { AuthGuard } from './auth.guard'
import { SignInPageModule } from './sign-in-page/sign-in-page.module'
import { DemoModule } from './demo/demo.module'

@NgModule({
    imports: [CommonModule, HttpClientModule, AppRoutingModule, SignInPageModule, DemoModule],
    declarations: [AuthComponent],
    providers: [AuthService, AuthGuard]
})
export class AuthModule {}
