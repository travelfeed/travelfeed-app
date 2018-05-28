import { Component, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import { Article, ArticlesState, ArticlesAction, ArticlesActionTypes } from '../../../../store/articles'

@Component({
    selector: 'cmp-articles-item',
    templateUrl: './articles-item.component.html',
    styleUrls: ['./articles-item.component.scss'],
})
export class ArticlesItemComponent {
    @Input() public article: Article

    public constructor(private store: Store<ArticlesState>) {}

    public delete(event: Event): void {
        event.stopPropagation()

        this.store.dispatch<ArticlesAction>({
            type: ArticlesActionTypes.DELETE_ARTICLE,
            payload: this.article,
        })
    }

    public publish(event: Event): void {
        event.stopPropagation()

        this.store.dispatch<ArticlesAction>({
            type: ArticlesActionTypes.PUBLISH_ARTICLE,
            payload: this.article,
        })
    }

    public unpublish(event: Event): void {
        event.stopPropagation()

        this.store.dispatch<ArticlesAction>({
            type: ArticlesActionTypes.UNPUBLISH_ARTICLE,
            payload: this.article,
        })
    }
}
