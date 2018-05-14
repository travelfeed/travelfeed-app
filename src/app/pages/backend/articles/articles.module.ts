import { NgModule } from '@angular/core'
import { SharedModule } from '../../../shared/shared.module'
import { FormElementsModule } from '../../../components/form-elements/form-elements.module'
import { AppRoutingModule } from '../../../app-routing.module'
import { ArticlesComponent } from './articles.component'
import { ArticlesListComponent } from './articles-list/articles-list.component'
import { ArticlesDetailsComponent } from './articles-details/articles-details.component'
import { ArticlesService } from './articles.service'

@NgModule({
    imports: [SharedModule, FormElementsModule, AppRoutingModule],
    declarations: [ArticlesComponent, ArticlesListComponent, ArticlesDetailsComponent],
    providers: [ArticlesService],
})
export class ArticlesModule {}
