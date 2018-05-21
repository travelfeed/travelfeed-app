import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { exhaustMap, map, catchError } from 'rxjs/operators'
import { ArticlesService } from '../../pages/backend/articles/articles.service'
import {
    ArticlesActionTypes,
    LoadArticles,
    LoadArticlesSuccess,
    LoadArticlesFail,
    SaveArticle,
    SaveArticleSuccess,
    SaveArticleFail,
    DeleteArticle,
    DeleteArticleSuccess,
    DeleteArticleFail,
} from './articles.action'

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

    @Effect({ dispatch: false })
    public saveArticle$ = this.actions$.pipe(
        ofType(ArticlesActionTypes.SAVE_ARTICLE),
        exhaustMap((action: SaveArticle) => {
            return this.articlesService
                .save(action.payload)
                .pipe(
                    map(() => new SaveArticleSuccess()),
                    catchError(error => of(new SaveArticleFail(error))),
                )
        }),
    )

    @Effect({ dispatch: false })
    public deleteArticle$ = this.actions$.pipe(
        ofType(ArticlesActionTypes.DELETE_ARTICLE),
        exhaustMap((action: DeleteArticle) => {
            return this.articlesService
                .delete(action.payload)
                .pipe(
                    map(() => new DeleteArticleSuccess()),
                    catchError(error => of(new DeleteArticleFail(error))),
                )
        }),
    )

    public constructor(private actions$: Actions, private articlesService: ArticlesService) {}
}
