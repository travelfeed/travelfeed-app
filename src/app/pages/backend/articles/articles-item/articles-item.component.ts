import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { Store } from '@ngrx/store'
import { Article } from '../../../../store/articles/article.model'
import { ArticlesState } from '../../../../store/articles/articles.reducer'
import { ArticlesAction, ArticlesActionTypes } from '../../../../store/articles/articles.action'

@Component({
    selector: 'cmp-articles-item',
    templateUrl: './articles-item.component.html',
    styleUrls: ['./articles-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesItemComponent {
    @Input() public article: Article

    public constructor(private store: Store<ArticlesState>) {}

    public delete(): void {
        this.store.dispatch<ArticlesAction>({
            type: ArticlesActionTypes.DELETE_ARTICLE,
            payload: this.article,
        })
    }
}
