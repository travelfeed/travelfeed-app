import { Country } from './country.model'
import { CountriesAction, CountriesActionTypes } from './countries.action'

export interface CountriesState {
    items: Array<Country>
    selected: Country
    loaded: boolean
    loading: boolean
}

export const initialState: CountriesState = {
    items: [],
    selected: null,
    loaded: false,
    loading: false,
}

export function countries(
    state: CountriesState = initialState,
    action: CountriesAction,
): CountriesState {
    switch (action.type) {
        case CountriesActionTypes.LOAD_COUNTRIES:
            return {
                ...state,
                loading: true,
                loaded: false,
            }

        case CountriesActionTypes.LOAD_COUNTRIES_SUCCESS:
            return {
                ...state,
                items: action.payload.items,
                selected: action.payload.items.find(item => item.id === action.payload.selected),
                loading: false,
                loaded: true,
            }

        case CountriesActionTypes.LOAD_COUNTRIES_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
            }

        case CountriesActionTypes.CREATE_COUNTRY:
            return {
                ...state,
                loading: true,
                loaded: false,
            }

        case CountriesActionTypes.CREATE_COUNTRY_SUCCESS:
            return {
                ...state,
                items: [...state.items, action.payload],
                loading: false,
                loaded: true,
            }

        case CountriesActionTypes.CREATE_COUNTRY_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
            }

        case CountriesActionTypes.SELECT_COUNTRY:
            return {
                ...state,
                selected: state.items.find(item => item.id === action.payload),
            }

        case CountriesActionTypes.SAVE_COUNTRY:
            return {
                ...state,
                loading: true,
                loaded: false,
            }

        case CountriesActionTypes.SAVE_COUNTRY_SUCCESS:
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

        case CountriesActionTypes.SAVE_COUNTRY_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
            }

        case CountriesActionTypes.DELETE_COUNTRY:
            return {
                ...state,
                loading: true,
                loaded: false,
            }

        case CountriesActionTypes.DELETE_COUNTRY_SUCCESS:
            return {
                ...state,
                items: state.items.filter(item => item !== action.payload),
                selected: state.selected === action.payload ? null : state.selected,
                loading: false,
                loaded: true,
            }

        case CountriesActionTypes.DELETE_COUNTRY_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
            }
    }

    return state
}
