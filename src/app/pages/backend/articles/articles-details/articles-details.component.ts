import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { Article } from '../../../../store/articles/article.model'

@Component({
    selector: 'cmp-articles-details',
    templateUrl: './articles-details.component.html',
    styleUrls: ['./articles-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesDetailsComponent {
    @Input() public article: Article

    public constructor() {}
}
