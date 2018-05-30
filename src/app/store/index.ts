import { ActionReducerMap } from '@ngrx/store'
import { LanguagesState, languages } from './languages'
import { ArticlesState, articles } from './articles'
import { TranslationsState, translations } from './translations'
import { UsersState, users } from './users'

export interface AppState {
    languages: LanguagesState
    articles: ArticlesState
    translations: TranslationsState
    users: UsersState
}

export const initialState: AppState = {
    languages: null,
    articles: null,
    translations: null,
    users: null,
}

export const reducers: ActionReducerMap<AppState> = {
    languages: languages,
    articles: articles,
    translations: translations,
    users: users,
}
