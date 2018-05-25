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

        case UsersActionTypes.SELECT_USER:
            return {
                ...state,
                selected: state.items.find(item => item.id === action.payload),
            }
    }

    return state
}
