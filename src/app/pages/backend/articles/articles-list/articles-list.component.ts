import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { Router } from '@angular/router'
import { FormControl } from '@angular/forms'
import { Store } from '@ngrx/store'
import { Article, ArticlesState, ArticlesAction, ArticlesActionTypes } from '../../../../store/articles'

@Component({
    selector: 'cmp-articles-list',
    templateUrl: './articles-list.component.html',
    styleUrls: ['./articles-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesListComponent {
    @Input() public articles: Array<Article>

    public createMode: boolean = false

    public title: FormControl = new FormControl('')

    public constructor(private router: Router, private store: Store<ArticlesState>) {}

    public select(article: Article): void {
        this.router.navigate(['/backend/articles/', article.id])
    }

    public toggle(): void {
        if (this.createMode) {
            this.title.reset('')
        }

        this.createMode = !this.createMode
    }

    public create(): void {
        this.store.dispatch<ArticlesAction>({
            type: ArticlesActionTypes.CREATE_ARTICLE,
            payload: this.title.value,
        })

        this.toggle()
    }
}
