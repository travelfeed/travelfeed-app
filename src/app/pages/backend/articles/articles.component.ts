import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { takeWhile, filter } from 'rxjs/operators'
import { AppState } from '../../../store'
import { ArticlesState, ArticlesAction, ArticlesActionTypes } from '../../../store/articles'

@Component({
    selector: 'cmp-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit, OnDestroy {
    public state$: Observable<ArticlesState> = this.store.pipe(select('articles'))

    private alive: boolean = true

    public constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

    public ngOnInit(): void {
        this.store.dispatch<ArticlesAction>({
            type: ArticlesActionTypes.LOAD_ARTICLES,
            payload: parseInt(this.route.snapshot.paramMap.get('id') || null, 10),
        })

        this.route.paramMap
            .pipe(takeWhile(() => this.alive), filter((params: ParamMap) => params.has('id')))
            .subscribe(params => {
                this.store.dispatch<ArticlesAction>({
                    type: ArticlesActionTypes.SELECT_ARTICLE,
                    payload: parseInt(params.get('id'), 10),
                })
            })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
