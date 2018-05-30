import { Action } from '@ngrx/store'
import { Language } from './'

// tslint:disable:max-classes-per-file

export enum LanguagesActionTypes {
    LOAD_LANGUAGES = '[Languages] Load languages',
    LOAD_LANGUAGES_SUCCESS = '[Languages] Load languages success',
    LOAD_LANGUAGES_FAIL = '[Languages] Load languages fail',
    SELECT_LANGUAGE = '[Languages] Select language',
    REFRESH_LANGUAGE = '[Languages] Refresh language',
}

/**
 * Load languages
 */
export class LoadLanguages implements Action {
    public readonly type = LanguagesActionTypes.LOAD_LANGUAGES
    public constructor() {}
}

export class LoadLanguagesSuccess implements Action {
    public readonly type = LanguagesActionTypes.LOAD_LANGUAGES_SUCCESS
    public constructor(public payload: Array<Language>) {}
}

export class LoadLanguagesFail implements Action {
    public readonly type = LanguagesActionTypes.LOAD_LANGUAGES_FAIL
    public constructor(public payload: Error) {}
}

export type LoadLanguagesAction = LoadLanguages | LoadLanguagesSuccess | LoadLanguagesFail

/**
 * Select language
 */
export class SelectLanguage implements Action {
    public readonly type = LanguagesActionTypes.SELECT_LANGUAGE
    public constructor(public payload: string) {}
}

export type SelectLanguageAction = SelectLanguage

/**
 * Refresh language
 */
export class RefreshLanguage implements Action {
    public readonly type = LanguagesActionTypes.REFRESH_LANGUAGE
}

export type RefreshLanguageAction = RefreshLanguage

/**
 * All actions
 */
export type LanguagesAction = LoadLanguagesAction | SelectLanguageAction | RefreshLanguageAction
