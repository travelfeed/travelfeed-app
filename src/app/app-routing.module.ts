import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { StyleguideComponent } from './pages/styleguide/styleguide.component'

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'styleguide'
    },
    {
        path: 'styleguide',
        component: StyleguideComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {}
