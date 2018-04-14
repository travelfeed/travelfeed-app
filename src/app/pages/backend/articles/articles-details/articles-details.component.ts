import { Component, OnInit, OnDestroy } from '@angular/core'
import { ArticlesService } from '../articles.service'
import { takeWhile } from 'rxjs/operators'
import { Article } from '../typings'

@Component({
    selector: 'cmp-articles-details',
    templateUrl: './articles-details.component.html',
    styleUrls: ['./articles-details.component.scss']
})
export class ArticlesDetailsComponent implements OnInit, OnDestroy {
    // public article: Article

    private alive: boolean = true

    public constructor(public articlesService: ArticlesService) {}

    public ngOnInit(): void {
        // this.articlesService.selected$
        //     .pipe(takeWhile(() => this.alive))
        //     .subscribe((article: Article) => {
        //         this.article = article
        //     })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
