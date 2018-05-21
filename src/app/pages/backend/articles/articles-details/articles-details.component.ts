import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Article } from '../../../../store/articles/article.model'
import { ArticlesState } from '../../../../store/articles/articles.reducer'
import { ArticlesAction, ArticlesActionTypes } from '../../../../store/articles/articles.action'

@Component({
    selector: 'cmp-articles-details',
    templateUrl: './articles-details.component.html',
    styleUrls: ['./articles-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesDetailsComponent {
    @Input() public article: Article

    public constructor(private router: Router, private store: Store<ArticlesState>) {}

    public save() {
        this.store.dispatch<ArticlesAction>({
            type: ArticlesActionTypes.SAVE_ARTICLE,
            payload: this.article,
        })
    }

    public delete() {
        this.store.dispatch<ArticlesAction>({
            type: ArticlesActionTypes.DELETE_ARTICLE,
            payload: this.article,
        })

        this.router.navigate(['/backend/articles'])
    }
}
