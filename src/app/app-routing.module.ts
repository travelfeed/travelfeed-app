import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { StyleguideComponent } from './pages/styleguide/styleguide.component'
import { BackendComponent } from './pages/backend/backend.component'
import { TranslationsComponent } from './pages/backend/translations/translations.component'
import { ArticlesComponent } from './pages/backend/articles/articles.component'
import { UsersComponent } from './pages/backend/users/users.component'
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
        component: HomeComponent,
    },
    {
        path: 'travelogue',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/',
            },
            {
                path: ':id',
                component: TravelogueComponent,
            },
        ],
    },
    {
        path: 'styleguide',
        component: StyleguideComponent,
    },
    {
        path: 'backend',
        canActivate: [AuthGuard],
        component: BackendComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'articles',
            },
            {
                path: 'translations',
                component: TranslationsComponent,
            },
            {
                path: 'articles',
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        component: ArticlesComponent,
                    },
                    {
                        path: ':id',
                        component: ArticlesComponent,
                    },
                ],
            },
            {
                path: 'users',
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        component: UsersComponent,
                    },
                    {
                        path: ':id',
                        component: UsersComponent,
                    },
                ],
            },
        ],
    },
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'signin',
            },
            {
                path: 'signin',
                component: SignInComponent,
            },
            {
                path: 'signout',
                component: SignOutComponent,
            },
            {
                path: 'register',
                component: RegistrationComponent,
            },
        ],
    },
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class AppRoutingModule {}
