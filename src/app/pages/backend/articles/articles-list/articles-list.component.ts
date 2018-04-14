import { Component, OnInit, OnDestroy } from '@angular/core'
import { ArticlesService } from '../articles.service'
import { takeWhile } from 'rxjs/operators'
import { Article } from '../typings'

@Component({
    selector: 'cmp-articles-list',
    templateUrl: './articles-list.component.html',
    styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit, OnDestroy {
    public articles: Array<Article>

    private alive: boolean = true

    public constructor(private articlesService: ArticlesService) {}

    public ngOnInit(): void {
        this.articlesService.articles$
            .pipe(takeWhile(() => this.alive))
            .subscribe((articles: Array<Article>) => {
                this.articles = articles
            })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
