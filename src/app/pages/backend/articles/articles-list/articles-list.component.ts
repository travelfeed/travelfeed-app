import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { Article } from '../../../../store/articles/article.model'

@Component({
    selector: 'cmp-articles-list',
    templateUrl: './articles-list.component.html',
    styleUrls: ['./articles-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesListComponent {
    @Input() public articles: Array<Article>

    public constructor() {}
}
