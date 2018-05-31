import { User } from './user.model'
import { UsersAction, UsersActionTypes } from './users.action'

export interface UsersState {
    items: Array<User>
    selected: User
    loaded: boolean
    loading: boolean
}

export const initialState: UsersState = {
    items: [],
    selected: null,
    loaded: false,
    loading: false,
}

export function users(state: UsersState = initialState, action: UsersAction): UsersState {
    switch (action.type) {
        case UsersActionTypes.LOAD_USERS:
            return {
                ...state,
                loading: true,
                loaded: false,
            }

        case UsersActionTypes.LOAD_USERS_SUCCESS:
            return {
                ...state,
                items: action.payload.items,
                selected: action.payload.items.find(item => item.id === action.payload.selected),
                loading: false,
                loaded: true,
            }

        case UsersActionTypes.LOAD_USERS_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
            }

        case UsersActionTypes.CREATE_USER:
            return {
                ...state,
                loading: true,
                loaded: false,
            }

        case UsersActionTypes.CREATE_USER_SUCCESS:
            return {
                ...state,
                items: [...state.items, action.payload],
                loading: false,
                loaded: true,
            }

        case UsersActionTypes.CREATE_USER_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
            }

        case UsersActionTypes.SELECT_USER:
            return {
                ...state,
                selected: state.items.find(item => item.id === action.payload),
            }

        case UsersActionTypes.SAVE_USER:
            return {
                ...state,
                loading: true,
                loaded: false,
            }

        case UsersActionTypes.SAVE_USER_SUCCESS:
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

        case UsersActionTypes.SAVE_USER_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
            }

        case UsersActionTypes.DELETE_USER:
            return {
                ...state,
                loading: true,
                loaded: false,
            }

        case UsersActionTypes.DELETE_USER_SUCCESS:
            return {
                ...state,
                items: state.items.filter(item => item !== action.payload),
                selected: state.selected === action.payload ? null : state.selected,
                loading: false,
                loaded: true,
            }

        case UsersActionTypes.DELETE_USER_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
            }
    }

    return state
}
