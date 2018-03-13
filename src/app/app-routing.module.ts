import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { StyleguideComponent } from './pages/styleguide/styleguide.component'
import { AuthComponent } from './pages/auth/auth.component'
import { SignInPageComponent } from './pages/auth/sign-in-page/sign-in-page.component'
import { DemoComponent } from './pages/auth/demo/demo.component'
import { AuthGuard } from './pages/auth/auth.guard'

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'styleguide'
    },
    {
        path: 'styleguide',
        component: StyleguideComponent
    },
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'demo'
            },
            {
                path: 'signin',
                component: SignInPageComponent
            },
            {
                path: 'demo',
                component: DemoComponent,
                canActivate: [AuthGuard]
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {}
