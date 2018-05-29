import { Action } from '@ngrx/store'
import { User } from '../users/user.model'

// tslint:disable:max-classes-per-file

export enum AuthActionTypes {
    SIGN_IN = '[Auth] Sign in',
    SIGN_IN_SUCCESS = '[Auth] Sign in success',
    SIGN_IN_FAIL = '[Auth] Sign in fail',
    SIGN_OUT = '[Auth] Sign out',
    SIGN_OUT_SUCCESS = '[Auth] Sign out success',
    SIGN_OUT_FAIL = '[Auth] Sign out fail',
    REGISTER = '[Auth] Register',
    REGISTER_SUCCESS = '[Auth] Register success',
    REGISTER_FAIL = '[Auth] Register fail',
    PERSIST_USER = '[Auth] Persist user',
}

/**
 * Sign in
 */
export class SignIn implements Action {
    public readonly type = AuthActionTypes.SIGN_IN
    public constructor(public payload: { email: string; password: string }) {}
}

export class SignInSuccess implements Action {
    public readonly type = AuthActionTypes.SIGN_IN_SUCCESS
    public constructor(public payload: User) {}
}

export class SignInFail implements Action {
    public readonly type = AuthActionTypes.SIGN_IN_FAIL
}

export type SignInAction = SignIn | SignInSuccess | SignInFail

/**
 * Sign out
 */
export class SignOut implements Action {
    public readonly type = AuthActionTypes.SIGN_OUT
}

export class SignOutSuccess implements Action {
    public readonly type = AuthActionTypes.SIGN_OUT_SUCCESS
}

export class SignOutFail implements Action {
    public readonly type = AuthActionTypes.SIGN_OUT_FAIL
}

export type SignOutAction = SignOut | SignOutSuccess | SignOutFail

/**
 * Register
 */
export class Register implements Action {
    public readonly type = AuthActionTypes.REGISTER
    public constructor(public payload: { username: string; email: string; password: string }) {}
}

export class RegisterSuccess implements Action {
    public readonly type = AuthActionTypes.REGISTER_SUCCESS
    public constructor(public payload: { username: string; email: string; password: string }) {}
}

export class RegisterFail implements Action {
    public readonly type = AuthActionTypes.REGISTER_FAIL
}

export type RegisterAction = Register | RegisterSuccess | RegisterFail

/**
 * Persist user
 */
export class PersistUser implements Action {
    public readonly type = AuthActionTypes.PERSIST_USER
    public constructor(public payload: User) {}
}

export type PersistUserAction = PersistUser

/**
 * All actions
 */
export type AuthAction = SignInAction | SignOutAction | RegisterAction | PersistUserAction
