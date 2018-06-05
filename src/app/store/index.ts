import { ActionReducerMap } from '@ngrx/store'
import { LanguagesState, languages } from './languages'
import { CountriesState, countries } from './countries'
import { ArticlesState, articles } from './articles'
import { TranslationsState, translations } from './translations'
import { UsersState, users } from './users'

export interface AppState {
    languages: LanguagesState
    countries: CountriesState
    articles: ArticlesState
    translations: TranslationsState
    users: UsersState
}

export const initialState: AppState = {
    languages: null,
    countries: null,
    articles: null,
    translations: null,
    users: null,
}

export const reducers: ActionReducerMap<AppState> = {
    languages,
    countries,
    articles,
    translations,
    users,
}
