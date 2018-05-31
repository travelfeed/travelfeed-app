import { Action } from '@ngrx/store'
import { Language } from '../languages'
import { Translation } from './translations.model'

// tslint:disable:max-classes-per-file

export enum TranslationsActionTypes {
    SELECT_LANGUAGE = '[Translations] Select language',
    LOAD_TRANSLATIONS = '[Translations] Load translations',
    LOAD_TRANSLATIONS_SUCCESS = '[Translations] Load translations success',
    LOAD_TRANSLATIONS_FAIL = '[Translations] Load translations fail',
    SAVE_TRANSLATION = '[Translations] Save translation',
    SAVE_TRANSLATION_SUCCESS = '[Translations] Save translation success',
    SAVE_TRANSLATION_FAIL = '[Translations] Save translation fail',
    DELETE_TRANSLATION = '[Translations] Delete translation',
    DELETE_TRANSLATION_SUCCESS = '[Translations] Delete translation success',
    DELETE_TRANSLATION_FAIL = '[Translations] Delete translation fail',
    CREATE_TRANSLATION_KEY = '[Translations] Create translation key',
    CREATE_TRANSLATION_KEY_SUCCESS = '[Translations] Create translation key success',
    CREATE_TRANSLATION_KEY_FAIL = '[Translations] Create translation key fail',
}

/**
 * Select language
 */
export class SelectLanguage implements Action {
    public readonly type = TranslationsActionTypes.SELECT_LANGUAGE
    public constructor(public payload: Language) {}
}

export type SelectLanguageAction = SelectLanguage

/**
 * Load translations
 */
export class LoadTranslations implements Action {
    public readonly type = TranslationsActionTypes.LOAD_TRANSLATIONS
    public constructor(public payload: Language) {}
}

export class LoadTranslationsSuccess implements Action {
    public readonly type = TranslationsActionTypes.LOAD_TRANSLATIONS_SUCCESS
    public constructor(public payload: Array<Translation>) {}
}

export class LoadTranslationsFail implements Action {
    public readonly type = TranslationsActionTypes.LOAD_TRANSLATIONS_FAIL
    public constructor(public payload: Error) {}
}

export type LoadTranslationsAction = LoadTranslations | LoadTranslationsSuccess | LoadTranslationsFail

/**
 * Save translation
 */
export class SaveTranslation implements Action {
    public readonly type = TranslationsActionTypes.SAVE_TRANSLATION
    public constructor(public payload: Translation) {}
}

export class SaveTranslationSuccess implements Action {
    public readonly type = TranslationsActionTypes.SAVE_TRANSLATION_SUCCESS
    public constructor(public payload: Translation) {}
}

export class SaveTranslationFail implements Action {
    public readonly type = TranslationsActionTypes.SAVE_TRANSLATION_FAIL
    public constructor(public payload: Error) {}
}

export type SaveTranslationAction = SaveTranslation | SaveTranslationSuccess | SaveTranslationFail

/**
 * Delete translation
 */
export class DeleteTranslation implements Action {
    public readonly type = TranslationsActionTypes.DELETE_TRANSLATION
    public constructor(public payload: Translation) {}
}

export class DeleteTranslationSuccess implements Action {
    public readonly type = TranslationsActionTypes.DELETE_TRANSLATION_SUCCESS
    public constructor(public payload: Translation) {}
}

export class DeleteTranslationFail implements Action {
    public readonly type = TranslationsActionTypes.DELETE_TRANSLATION_FAIL
    public constructor(public payload: Error) {}
}

export type DeleteTranslationAction =
    | DeleteTranslation
    | DeleteTranslationSuccess
    | DeleteTranslationFail

/**
 * Create translation key
 */
export class CreateTranslationKey implements Action {
    public readonly type = TranslationsActionTypes.CREATE_TRANSLATION_KEY
    public constructor(public payload: string) {}
}

export class CreateTranslationKeySuccess implements Action {
    public readonly type = TranslationsActionTypes.CREATE_TRANSLATION_KEY_SUCCESS
}

export class CreateTranslationKeyFail implements Action {
    public readonly type = TranslationsActionTypes.CREATE_TRANSLATION_KEY_FAIL
    public constructor(public payload: Error) {}
}

export type CreateTranslationKeyAction =
    | CreateTranslationKey
    | CreateTranslationKeySuccess
    | CreateTranslationKeyFail

/**
 * All actions
 */
export type TranslationsAction =
    | SelectLanguage
    | LoadTranslationsAction
    | SaveTranslationAction
    | DeleteTranslationAction
    | CreateTranslationKeyAction
