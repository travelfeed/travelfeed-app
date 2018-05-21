import { Injectable } from '@angular/core'
import { Actions, Effect } from '@ngrx/effects'
import { of } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
import { NotificationService } from '../../shared/notification/notification.service'
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
import { fromActionType } from '../helpers'

@Injectable()
export class ArticlesEffects {
    @Effect()
    public getArticles$ = this.actions$.pipe(
        fromActionType(ArticlesActionTypes.LOAD_ARTICLES, (action: LoadArticles) => {
            return this.articlesService.fetchArticles().pipe(
                map(articles => {
                    return new LoadArticlesSuccess({
                        items: articles,
                        selected: action.payload,
                    })
                }),
                catchError(error => {
                    this.notificationService.error('Error while loading articles!')
                    return of(new LoadArticlesFail(error))
                }),
            )
        }),
    )

    @Effect({ dispatch: false })
    public saveArticle$ = this.actions$.pipe(
        fromActionType(ArticlesActionTypes.SAVE_ARTICLE, (action: SaveArticle) => {
            return this.articlesService.save(action.payload).pipe(
                map(() => {
                    this.notificationService.success('Article successfully saved!')
                    return new SaveArticleSuccess()
                }),
                catchError(error => {
                    this.notificationService.error('Error while saving article!')
                    return of(new SaveArticleFail(error))
                }),
            )
        }),
    )

    @Effect({ dispatch: false })
    public deleteArticle$ = this.actions$.pipe(
        fromActionType(ArticlesActionTypes.DELETE_ARTICLE, (action: DeleteArticle) => {
            return this.articlesService.delete(action.payload).pipe(
                map(() => {
                    this.notificationService.success('Article successfully deleted!')
                    return new DeleteArticleSuccess()
                }),
                catchError(error => {
                    this.notificationService.error('Error while deleting article!')
                    return of(new DeleteArticleFail(error))
                }),
            )
        }),
    )

    public constructor(
        private actions$: Actions,
        private notificationService: NotificationService,
        private articlesService: ArticlesService,
    ) {}
}
