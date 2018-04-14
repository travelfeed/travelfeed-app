import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from '../../../app-routing.module'
import { ArticlesComponent } from './articles.component'
import { ArticlesService } from './articles.service'
import { ArticlesListComponent } from './articles-list/articles-list.component'
import { ArticlesDetailsComponent } from './articles-details/articles-details.component'

@NgModule({
    imports: [CommonModule, AppRoutingModule],
    declarations: [ArticlesComponent, ArticlesListComponent, ArticlesDetailsComponent],
    providers: [ArticlesService]
})
export class ArticlesModule {}
