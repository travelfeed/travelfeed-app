import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { ArticlesEffects, articles } from '../../../store/articles'
import { SharedModule } from '../../../shared/shared.module'
import { FormElementsModule } from '../../../components/form-elements/form-elements.module'
import { AppRoutingModule } from '../../../app-routing.module'
import { HeadlinesModule } from '../../../components/headlines/headlines.module'
import { IconModule } from '../../../components/icon/icon.module'
import { ArticlesComponent } from './articles.component'
import { ArticlesListComponent } from './articles-list/articles-list.component'
import { ArticlesItemComponent } from './articles-item/articles-item.component'
import { ArticlesDetailsComponent } from './articles-details/articles-details.component'
import { ArticlesService } from './articles.service'

@NgModule({
    imports: [
        ReactiveFormsModule,
        StoreModule.forFeature('articles', articles),
        EffectsModule.forFeature([ArticlesEffects]),
        SharedModule,
        FormElementsModule,
        AppRoutingModule,
        HeadlinesModule,
        IconModule,
    ],
    declarations: [
        ArticlesComponent,
        ArticlesListComponent,
        ArticlesItemComponent,
        ArticlesDetailsComponent,
    ],
    providers: [ArticlesService],
})
export class ArticlesModule {}
