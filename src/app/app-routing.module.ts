import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { StyleguideComponent } from './pages/styleguide/styleguide.component'
import { AuthComponent } from './pages/auth/auth.component'
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
        children: []
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {}
