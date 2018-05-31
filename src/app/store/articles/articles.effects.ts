import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, Effect } from '@ngrx/effects'
import { of, Observable } from 'rxjs'
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
    CreateArticle,
    CreateArticleSuccess,
    CreateArticleFail,
    PublishArticle,
    PublishArticleSuccess,
    PublishArticleFail,
    UnpublishArticle,
    UnpublishArticleSuccess,
    UnpublishArticleFail,
} from './articles.action'
import { fromActionType } from '../helpers'

@Injectable()
export class ArticlesEffects {
    @Effect()
    public getArticles$ = this.actions$.pipe(
        fromActionType(ArticlesActionTypes.LOAD_ARTICLES, (action: LoadArticles) => {
            return this.articlesService.fetchArticles().pipe(
                map(response => {
                    return new LoadArticlesSuccess({
                        items: response.data,
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

    @Effect()
    public createArticle$ = this.actions$.pipe(
        fromActionType(ArticlesActionTypes.CREATE_ARTICLE, (action: CreateArticle) => {
            return this.articlesService.create({ title: action.payload }).pipe(
                map(response => {
                    this.notificationService.success('Article successfully created!')
                    return new CreateArticleSuccess(response.data)
                }),
                catchError(error => {
                    this.notificationService.error('Error while creating new article!')
                    return of(new CreateArticleFail(error))
                }),
            )
        }),
    )

    @Effect()
    public saveArticle$ = this.actions$.pipe(
        fromActionType(ArticlesActionTypes.SAVE_ARTICLE, (action: SaveArticle) => {
            return this.articlesService.save(action.payload).pipe(
                map(() => {
                    this.notificationService.success('Article successfully saved!')
                    return new SaveArticleSuccess(action.payload)
                }),
                catchError(error => {
                    this.notificationService.error('Error while saving article!')
                    return of(new SaveArticleFail(error))
                }),
            )
        }),
    )

    @Effect()
    public deleteArticle$ = this.actions$.pipe(
        fromActionType(ArticlesActionTypes.DELETE_ARTICLE, (action: DeleteArticle) => {
            return this.articlesService.delete(action.payload).pipe(
                map(() => {
                    this.notificationService.success('Article successfully deleted!')
                    return new DeleteArticleSuccess(action.payload)
                }),
                catchError(error => {
                    this.notificationService.error('Error while deleting article!')
                    return of(new DeleteArticleFail(error))
                }),
            )
        }),
    )

    @Effect({ dispatch: false })
    public deleteArticleSuccess$ = this.actions$.pipe(
        fromActionType(ArticlesActionTypes.DELETE_ARTICLE_SUCCESS, () => {
            return new Observable(observer => {
                this.router
                    .navigate(['/backend/articles'])
                    .then(() => observer.complete())
                    .catch(error => observer.error(error))
            })
        }),
    )

    @Effect()
    public publishArticle$ = this.actions$.pipe(
        fromActionType(ArticlesActionTypes.PUBLISH_ARTICLE, (action: PublishArticle) => {
            return this.articlesService.publish(action.payload).pipe(
                map(() => {
                    this.notificationService.success('Article successfully published!')
                    return new PublishArticleSuccess(action.payload)
                }),
                catchError(error => {
                    this.notificationService.error('Error while publishing article!')
                    return of(new PublishArticleFail(error))
                }),
            )
        }),
    )

    @Effect()
    public unpublishArticle$ = this.actions$.pipe(
        fromActionType(ArticlesActionTypes.UNPUBLISH_ARTICLE, (action: UnpublishArticle) => {
            return this.articlesService.unpublish(action.payload).pipe(
                map(() => {
                    this.notificationService.success('Article successfully unpublished!')
                    return new UnpublishArticleSuccess(action.payload)
                }),
                catchError(error => {
                    this.notificationService.error('Error while unpublishing article!')
                    return of(new UnpublishArticleFail(error))
                }),
            )
        }),
    )

    public constructor(
        private router: Router,
        private actions$: Actions,
        private notificationService: NotificationService,
        private articlesService: ArticlesService,
    ) {}
}
