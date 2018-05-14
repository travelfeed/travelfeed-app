import { Component } from '@angular/core'
import { ArticlesService } from '../articles.service'

@Component({
    selector: 'cmp-articles-details',
    templateUrl: './articles-details.component.html',
    styleUrls: ['./articles-details.component.scss'],
})
export class ArticlesDetailsComponent {
    public constructor(public articlesService: ArticlesService) {}
}
