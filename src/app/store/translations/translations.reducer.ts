import { Language } from '../languages'
import { Translation } from './translations.model'
import { TranslationsAction, TranslationsActionTypes } from './translations.action'

export interface TranslationsState {
    items: Array<Translation>
    language: Language
    loaded: boolean
    loading: boolean
}

export const initialState: TranslationsState = {
    items: [],
    language: null,
    loaded: false,
    loading: false,
}

export function translations(
    state: TranslationsState = initialState,
    action: TranslationsAction,
): TranslationsState {
    switch (action.type) {
        case TranslationsActionTypes.SELECT_LANGUAGE:
            return {
                ...state,
                language: action.payload,
                loading: false,
                loaded: false,
            }

        case TranslationsActionTypes.LOAD_TRANSLATIONS:
            return {
                ...state,
                loading: true,
                loaded: false,
            }

        case TranslationsActionTypes.LOAD_TRANSLATIONS_SUCCESS:
            return {
                ...state,
                items: action.payload,
                loading: false,
                loaded: true,
            }

        case TranslationsActionTypes.LOAD_TRANSLATIONS_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
            }

        case TranslationsActionTypes.SAVE_TRANSLATION:
            return {
                ...state,
                loading: true,
                loaded: false,
            }

        case TranslationsActionTypes.SAVE_TRANSLATION_SUCCESS:
            return {
                ...state,
                items: state.items.map(item => {
                    if (item === action.payload) {
                        return {
                            ...item,
                            ...action.payload,
                        }
                    }

                    return item
                }),
                loading: false,
                loaded: true,
            }

        case TranslationsActionTypes.SAVE_TRANSLATION_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
            }

        case TranslationsActionTypes.DELETE_TRANSLATION:
            return {
                ...state,
                loading: true,
                loaded: false,
            }

        case TranslationsActionTypes.DELETE_TRANSLATION_SUCCESS:
            return {
                ...state,
                items: state.items.filter(item => item !== action.payload),
                loading: false,
                loaded: true,
            }

        case TranslationsActionTypes.DELETE_TRANSLATION_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
            }

        case TranslationsActionTypes.CREATE_TRANSLATION_KEY:
            return {
                ...state,
                loading: true,
                loaded: false,
            }

        case TranslationsActionTypes.CREATE_TRANSLATION_KEY_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
            }

        case TranslationsActionTypes.CREATE_TRANSLATION_KEY_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
            }
    }

    return state
}
