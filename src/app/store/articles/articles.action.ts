import { Action } from '@ngrx/store'
import { Article } from './article.model'

// tslint:disable:max-classes-per-file

export enum ArticlesActionTypes {
    LOAD_ARTICLES = '[Articles] Load articles',
    LOAD_ARTICLES_SUCCESS = '[Articles] Load articles success',
    LOAD_ARTICLES_FAIL = '[Articles] Load articles fail',
    CREATE_ARTICLE = '[Articles] Create article',
    CREATE_ARTICLE_SUCCESS = '[Articles] Create article success',
    CREATE_ARTICLE_FAIL = '[Articles] Create article fail',
    SELECT_ARTICLE = '[Articles] Select article',
    SAVE_ARTICLE = '[Articles] Save article',
    SAVE_ARTICLE_SUCCESS = '[Articles] Save article success',
    SAVE_ARTICLE_FAIL = '[Articles] Save article fail',
    DELETE_ARTICLE = '[Articles] Delete article',
    DELETE_ARTICLE_SUCCESS = '[Articles] Delete article success',
    DELETE_ARTICLE_FAIL = '[Articles] Delete article fail',
}

/**
 * Load articles
 */
export class LoadArticles implements Action {
    public readonly type = ArticlesActionTypes.LOAD_ARTICLES
    public constructor(public payload: number) {}
}

export class LoadArticlesSuccess implements Action {
    public readonly type = ArticlesActionTypes.LOAD_ARTICLES_SUCCESS
    public constructor(public payload: { items: Array<Article>; selected: number }) {}
}

export class LoadArticlesFail implements Action {
    public readonly type = ArticlesActionTypes.LOAD_ARTICLES_FAIL
    public constructor(public payload: Error) {}
}

export type LoadArticlesAction = LoadArticles | LoadArticlesSuccess | LoadArticlesFail

/**
 * Select article
 */
export class SelectArticle implements Action {
    public readonly type = ArticlesActionTypes.SELECT_ARTICLE
    public constructor(public payload: number) {}
}

export type SelectArticleAction = SelectArticle

/**
 * Create article
 */
export class CreateArticle implements Action {
    public readonly type = ArticlesActionTypes.CREATE_ARTICLE
    public constructor(public payload: string) {}
}

export class CreateArticleSuccess implements Action {
    public readonly type = ArticlesActionTypes.CREATE_ARTICLE_SUCCESS
    public constructor(public payload: Article) {}
}

export class CreateArticleFail implements Action {
    public readonly type = ArticlesActionTypes.CREATE_ARTICLE_FAIL
    public constructor(public payload: Error) {}
}

export type CreateArticleAction = CreateArticle | CreateArticleSuccess | CreateArticleFail

/**
 * Save article
 */
export class SaveArticle implements Action {
    public readonly type = ArticlesActionTypes.SAVE_ARTICLE
    public constructor(public payload: Article) {}
}

export class SaveArticleSuccess implements Action {
    public readonly type = ArticlesActionTypes.SAVE_ARTICLE_SUCCESS
}

export class SaveArticleFail implements Action {
    public readonly type = ArticlesActionTypes.SAVE_ARTICLE_FAIL
    public constructor(public payload: Error) {}
}

export type SaveArticleAction = SaveArticle | SaveArticleSuccess | SaveArticleFail

/**
 * Delete article
 */
export class DeleteArticle implements Action {
    public readonly type = ArticlesActionTypes.DELETE_ARTICLE
    public constructor(public payload: Article) {}
}

export class DeleteArticleSuccess implements Action {
    public readonly type = ArticlesActionTypes.DELETE_ARTICLE_SUCCESS
    public constructor(public payload: Article) {}
}

export class DeleteArticleFail implements Action {
    public readonly type = ArticlesActionTypes.DELETE_ARTICLE_FAIL
    public constructor(public payload: Error) {}
}

export type DeleteArticleAction = DeleteArticle | DeleteArticleSuccess | DeleteArticleFail

/**
 * All actions
 */
export type ArticlesAction =
    | LoadArticlesAction
    | CreateArticleAction
    | SelectArticleAction
    | SaveArticleAction
    | DeleteArticleAction
