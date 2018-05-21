import { Action } from '@ngrx/store'
import { Article } from './article.model'

// tslint:disable:max-classes-per-file

export enum ArticlesActionTypes {
    LOAD_ARTICLES = '[Articles] Load articles',
    LOAD_ARTICLES_SUCCESS = '[Articles] Load articles success',
    LOAD_ARTICLES_FAIL = '[Articles] Load articles fail',
    SELECT_ARTICLE = '[Articles] Select article',
}

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
    public constructor(public payload: Array<Article>) {}
}

export class SelectArticle implements Action {
    public readonly type = ArticlesActionTypes.SELECT_ARTICLE
    public constructor(public payload: number) {}
}

export type ArticlesAction = LoadArticles | LoadArticlesSuccess | LoadArticlesFail | SelectArticle
