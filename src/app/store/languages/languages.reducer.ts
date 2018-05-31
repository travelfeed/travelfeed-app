import { Language } from './languages.model'
import { LanguagesAction, LanguagesActionTypes } from './languages.action'

export interface LanguagesState {
    items: Array<Language>
    selected: Language
    loaded: boolean
    loading: boolean
}

export const initialState: LanguagesState = {
    items: [],
    selected: null,
    loaded: false,
    loading: false,
}

export function languages(
    state: LanguagesState = initialState,
    action: LanguagesAction,
): LanguagesState {
    switch (action.type) {
        case LanguagesActionTypes.LOAD_LANGUAGES:
            return {
                ...state,
                loading: true,
                loaded: false,
            }

        case LanguagesActionTypes.LOAD_LANGUAGES_SUCCESS:
            return {
                ...state,
                items: action.payload,
                loading: false,
                loaded: true,
            }

        case LanguagesActionTypes.LOAD_LANGUAGES_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
            }

        case LanguagesActionTypes.SELECT_LANGUAGE:
            return {
                ...state,
                selected: state.items.find(item => item.id === action.payload),
            }
    }

    return state
}
