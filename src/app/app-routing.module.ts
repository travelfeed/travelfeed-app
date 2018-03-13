import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { StyleguideComponent } from './pages/styleguide/styleguide.component'
import { HomeComponent } from './pages/home/home.component'

export const routes: Routes = [
    {
        path: 'styleguide',
        component: StyleguideComponent
    },
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {}
