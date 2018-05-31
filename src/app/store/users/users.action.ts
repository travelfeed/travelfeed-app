import { Action } from '@ngrx/store'
import { User } from './user.model'

// tslint:disable:max-classes-per-file

export enum UsersActionTypes {
    LOAD_USERS = '[Users] Load users',
    LOAD_USERS_SUCCESS = '[Users] Load users success',
    LOAD_USERS_FAIL = '[Users] Load users fail',
    CREATE_USER = '[Users] Create user',
    CREATE_USER_SUCCESS = '[Users] Create user success',
    CREATE_USER_FAIL = '[Users] Create user fail',
    SELECT_USER = '[Users] Select user',
    SAVE_USER = '[Users] Save user',
    SAVE_USER_SUCCESS = '[Users] Save user success',
    SAVE_USER_FAIL = '[Users] Save user fail',
    DELETE_USER = '[Users] Delete user',
    DELETE_USER_SUCCESS = '[Users] Delete user success',
    DELETE_USER_FAIL = '[Users] Delete user fail',
    PUBLISH_USER = '[Users] Publish user',
    PUBLISH_USER_SUCCESS = '[Users] Publish user success',
    PUBLISH_USER_FAIL = '[Users] Publish user fail',
    UNPUBLISH_USER = '[Users] Unpublish user',
    UNPUBLISH_USER_SUCCESS = '[Users] Unpublish user success',
    UNPUBLISH_USER_FAIL = '[Users] Unpublish user fail',
}

/**
 * Load users
 */
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

export type LoadUsersAction = LoadUsers | LoadUsersSuccess | LoadUsersFail

/**
 * Select user
 */
export class SelectUser implements Action {
    public readonly type = UsersActionTypes.SELECT_USER
    public constructor(public payload: number) {}
}

export type SelectUserAction = SelectUser

/**
 * Create user
 */
export class CreateUser implements Action {
    public readonly type = UsersActionTypes.CREATE_USER
    public constructor(public payload: string) {}
}

export class CreateUserSuccess implements Action {
    public readonly type = UsersActionTypes.CREATE_USER_SUCCESS
    public constructor(public payload: User) {}
}

export class CreateUserFail implements Action {
    public readonly type = UsersActionTypes.CREATE_USER_FAIL
    public constructor(public payload: Error) {}
}

export type CreateUserAction = CreateUser | CreateUserSuccess | CreateUserFail

/**
 * Save user
 */
export class SaveUser implements Action {
    public readonly type = UsersActionTypes.SAVE_USER
    public constructor(public payload: User) {}
}

export class SaveUserSuccess implements Action {
    public readonly type = UsersActionTypes.SAVE_USER_SUCCESS
    public constructor(public payload: User) {}
}

export class SaveUserFail implements Action {
    public readonly type = UsersActionTypes.SAVE_USER_FAIL
    public constructor(public payload: Error) {}
}

export type SaveUserAction = SaveUser | SaveUserSuccess | SaveUserFail

/**
 * Delete user
 */
export class DeleteUser implements Action {
    public readonly type = UsersActionTypes.DELETE_USER
    public constructor(public payload: User) {}
}

export class DeleteUserSuccess implements Action {
    public readonly type = UsersActionTypes.DELETE_USER_SUCCESS
    public constructor(public payload: User) {}
}

export class DeleteUserFail implements Action {
    public readonly type = UsersActionTypes.DELETE_USER_FAIL
    public constructor(public payload: Error) {}
}

export type DeleteUserAction = DeleteUser | DeleteUserSuccess | DeleteUserFail

/**
 * All actions
 */
export type UsersAction =
    | LoadUsersAction
    | CreateUserAction
    | SelectUserAction
    | SaveUserAction
    | DeleteUserAction
