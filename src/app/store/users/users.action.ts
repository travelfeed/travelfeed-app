import { Action } from '@ngrx/store'
import { User } from './user.model'

// tslint:disable:max-classes-per-file

export enum UsersActionTypes {
    LOAD_USERS = '[Users] Load users',
    LOAD_USERS_SUCCESS = '[Users] Load users success',
    LOAD_USERS_FAIL = '[Users] Load users fail',
    SELECT_USER = '[Users] Select user',
}

export class LoadUsers implements Action {
    public readonly type = UsersActionTypes.LOAD_USERS
    public constructor(public payload: number) {}
}

export class LoadUsersSuccess implements Action {
    public readonly type = UsersActionTypes.LOAD_USERS_SUCCESS
    public constructor(public payload: { items: Array<User>; selected: number }) {}
}

export class LoadUsersFail implements Action {
    public readonly type = UsersActionTypes.LOAD_USERS_FAIL
    public constructor(public payload: Array<User>) {}
}

export class SelectUser implements Action {
    public readonly type = UsersActionTypes.SELECT_USER
    public constructor(public payload: number) {}
}

export type UsersAction = LoadUsers | LoadUsersSuccess | LoadUsersFail | SelectUser
