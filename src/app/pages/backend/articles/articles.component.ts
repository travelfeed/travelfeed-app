import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { takeWhile, switchMap } from 'rxjs/operators'
import { ArticlesService } from './articles.service'
import { Article } from './typings'

@Component({
    selector: 'cmp-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit, OnDestroy {
    public articles: Array<Article> = []

    private params: ParamMap

    private alive: boolean = true

    public constructor(
        private router: Router,
        private route: ActivatedRoute,
        private articlesService: ArticlesService,
    ) {}

    public ngOnInit(): void {
        this.route.paramMap
            .pipe(
                takeWhile(() => this.alive),
                switchMap((params: ParamMap) => {
                    this.params = params
                    return this.articlesService.fetchArticles()
                }),
            )
            .subscribe((articles: Array<Article>) => {
                // redirect to first article if id is not present
                if (!this.params.has('id')) {
                    return this.router.navigate(['/backend/articles', articles[0].id])
                }

                // select article of current id
                const id = this.params.get('id')
                const article = articles.find(item => item.id === parseInt(id, 10))

                // inject articles into service and select first one
                this.articlesService.articles$.next(articles)
                this.articlesService.selected$.next(article)
            })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
