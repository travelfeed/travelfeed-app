import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { StyleguideComponent } from './pages/styleguide/styleguide.component'
import { BackendComponent } from './pages/backend/backend.component'
import { ArticlesComponent } from './pages/backend/articles/articles.component'
import { ArticlesOverviewComponent } from './pages/backend/articles/articles-overview/articles-overview.component'
import { ArticlesDetailsComponent } from './pages/backend/articles/articles-details/articles-details.component'
import { AuthGuard } from './pages/auth/auth.guard'
import { AuthComponent } from './pages/auth/auth.component'
import { SignInComponent } from './pages/auth/sign-in/sign-in.component'
import { SignOutComponent } from './pages/auth/sign-out/sign-out.component'
import { RegistrationComponent } from './pages/auth/registration/registration.component'
import { TravelogueComponent } from './pages/travelogue/travelogue.component'

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'travelogue',
        component: TravelogueComponent
    },
    {
        path: 'styleguide',
        component: StyleguideComponent
    },
    {
        path: 'backend',
        component: BackendComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'articles'
            },
            {
                path: 'articles',
                canActivate: [AuthGuard],
                component: ArticlesComponent,
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        component: ArticlesOverviewComponent
                    },
                    {
                        path: ':id',
                        component: ArticlesDetailsComponent
                    }
                ]
            }
        ]
    },
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'signin'
            },
            {
                path: 'signin',
                component: SignInComponent
            },
            {
                path: 'signout',
                component: SignOutComponent
            },
            {
                path: 'register',
                component: RegistrationComponent
            }
        ]
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
