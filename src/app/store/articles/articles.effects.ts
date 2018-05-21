import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { exhaustMap, map, catchError } from 'rxjs/operators'
import {
    ArticlesActionTypes,
    LoadArticlesSuccess,
    LoadArticlesFail,
    LoadArticles,
} from './articles.action'
import { ArticlesService } from '../../pages/backend/articles/articles.service'

@Injectable()
export class ArticlesEffects {
    @Effect()
    public getArticles$ = this.actions$.pipe(
        ofType(ArticlesActionTypes.LOAD_ARTICLES),
        exhaustMap((action: LoadArticles) => {
            return this.articlesService.fetchArticles().pipe(
                map(articles => {
                    return new LoadArticlesSuccess({
                        items: articles,
                        selected: action.payload,
                    })
                }),
                catchError(error => of(new LoadArticlesFail(error))),
            )
        }),
    )

    public constructor(private actions$: Actions, private articlesService: ArticlesService) {}
}
