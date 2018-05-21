import { Article } from './article.model'
import { ArticlesAction, ArticlesActionTypes } from './articles.action'

export interface ArticlesState {
    items: Array<Article>
    selected: Article
    loaded: boolean
    loading: boolean
}

export const initialState: ArticlesState = {
    items: [],
    selected: null,
    loaded: false,
    loading: false,
}

export function articles(state: ArticlesState = initialState, action: ArticlesAction): ArticlesState {
    switch (action.type) {
        case ArticlesActionTypes.LOAD_ARTICLES:
            return {
                ...state,
                loading: true,
                loaded: false,
            }

        case ArticlesActionTypes.LOAD_ARTICLES_SUCCESS:
            return {
                ...state,
                items: action.payload.items,
                selected: action.payload.items.find(item => item.id === action.payload.selected),
                loading: false,
                loaded: true,
            }

        case ArticlesActionTypes.LOAD_ARTICLES_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
            }

        case ArticlesActionTypes.CREATE_ARTICLE:
            return {
                ...state,
                loading: true,
                loaded: false,
            }

        case ArticlesActionTypes.CREATE_ARTICLE_SUCCESS:
            return {
                ...state,
                items: [...state.items, action.payload],
                loading: false,
                loaded: true,
            }

        case ArticlesActionTypes.CREATE_ARTICLE_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
            }

        case ArticlesActionTypes.SELECT_ARTICLE:
            return {
                ...state,
                selected: state.items.find(item => item.id === action.payload),
            }

        case ArticlesActionTypes.SAVE_ARTICLE:
            return {
                ...state,
                loading: true,
                loaded: false,
            }

        case ArticlesActionTypes.SAVE_ARTICLE_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
            }

        case ArticlesActionTypes.SAVE_ARTICLE_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
            }

        case ArticlesActionTypes.DELETE_ARTICLE:
            return {
                ...state,
                loading: true,
                loaded: false,
            }

        case ArticlesActionTypes.DELETE_ARTICLE_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
            }

        case ArticlesActionTypes.DELETE_ARTICLE_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
            }
    }

    return state
}
