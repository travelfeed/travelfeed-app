import { Component, AfterViewInit, Input, ChangeDetectionStrategy } from '@angular/core'
import { Router } from '@angular/router'
import { FormControl } from '@angular/forms'
import { Store } from '@ngrx/store'
import { Article } from '../../../../store/articles/article.model'
import { ArticlesState } from '../../../../store/articles/articles.reducer'
import { ArticlesAction, ArticlesActionTypes } from '../../../../store/articles/articles.action'

@Component({
    selector: 'cmp-articles-list',
    templateUrl: './articles-list.component.html',
    styleUrls: ['./articles-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesListComponent implements AfterViewInit {
    @Input() public articles: Array<Article>

    public createMode: boolean = false

    public title: FormControl = new FormControl()

    public constructor(private router: Router, private store: Store<ArticlesState>) {}

    public ngAfterViewInit(): void {
        this.title.setValue('')
    }

    public select(article: Article): void {
        this.router.navigate(['/backend/articles/', article.id])
    }

    public toggle(): void {
        this.createMode = !this.createMode

        if (this.title.touched) {
            this.title.setValue('')
        }
    }

    public create(): void {
        this.store.dispatch<ArticlesAction>({
            type: ArticlesActionTypes.CREATE_ARTICLE,
            payload: this.title.value,
        })

        this.createMode = false
        this.title.setValue('')
    }
}
