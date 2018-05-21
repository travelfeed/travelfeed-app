import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { Article } from '../../../../store/articles/article.model'

@Component({
    selector: 'cmp-articles-item',
    templateUrl: './articles-item.component.html',
    styleUrls: ['./articles-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesItemComponent {
    @Input() public article: Article

    public constructor() {}

    public delete(article): void {
        console.log('==> you want to delete', article)
    }
}
