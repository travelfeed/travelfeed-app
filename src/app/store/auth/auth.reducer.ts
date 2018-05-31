import { AuthAction, AuthActionTypes } from './auth.action'
import { User } from '../users/user.model'

export interface AuthState {
    loaded: boolean
    loading: boolean
    user: User
}

export const initialState: AuthState = {
    loaded: false,
    loading: false,
    user: null,
}

export function auth(state: AuthState = initialState, action: AuthAction): AuthState {
    switch (action.type) {
        case AuthActionTypes.SIGN_IN:
            return {
                ...state,
                loading: true,
                loaded: false,
            }

        case AuthActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                user: action.payload,
            }

        case AuthActionTypes.SIGN_IN_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
            }

        case AuthActionTypes.SIGN_OUT:
            return {
                ...state,
                loading: true,
                loaded: false,
            }

        case AuthActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                user: null,
            }

        case AuthActionTypes.SIGN_OUT_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
            }

        case AuthActionTypes.REGISTER:
            return {
                ...state,
                loading: true,
                loaded: false,
            }

        case AuthActionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
            }

        case AuthActionTypes.REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
            }

        case AuthActionTypes.PERSIST_USER:
            return {
                ...state,
                user: action.payload,
            }
    }

    return state
}
