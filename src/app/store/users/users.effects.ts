import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, Effect } from '@ngrx/effects'
import { of, Observable } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
import { NotificationService } from '../../shared/notification/notification.service'
import { UsersService } from '../../pages/backend/users/users.service'
import {
    UsersActionTypes,
    LoadUsers,
    LoadUsersSuccess,
    LoadUsersFail,
    SaveUser,
    SaveUserSuccess,
    SaveUserFail,
    DeleteUser,
    DeleteUserSuccess,
    DeleteUserFail,
    CreateUser,
    CreateUserSuccess,
    CreateUserFail,
} from './users.action'
import { fromActionType } from '../helpers'

@Injectable()
export class UsersEffects {
    @Effect()
    public getUsers$ = this.actions$.pipe(
        fromActionType(UsersActionTypes.LOAD_USERS, (action: LoadUsers) => {
            return this.usersService.fetchUsers().pipe(
                map(response => {
                    return new LoadUsersSuccess({
                        items: response.data,
                        selected: action.payload,
                    })
                }),
                catchError(error => {
                    this.notificationService.error('Error while loading users!')
                    return of(new LoadUsersFail(error))
                }),
            )
        }),
    )

    @Effect()
    public createUser$ = this.actions$.pipe(
        fromActionType(UsersActionTypes.CREATE_USER, (action: CreateUser) => {
            return this.usersService.create({ email: action.payload }).pipe(
                map(response => {
                    this.notificationService.success('User successfully created!')
                    return new CreateUserSuccess(response.data)
                }),
                catchError(error => {
                    this.notificationService.error('Error while creating new user!')
                    return of(new CreateUserFail(error))
                }),
            )
        }),
    )

    @Effect()
    public saveUser$ = this.actions$.pipe(
        fromActionType(UsersActionTypes.SAVE_USER, (action: SaveUser) => {
            return this.usersService.save(action.payload).pipe(
                map(() => {
                    this.notificationService.success('User successfully saved!')
                    return new SaveUserSuccess(action.payload)
                }),
                catchError(error => {
                    this.notificationService.error('Error while saving user!')
                    return of(new SaveUserFail(error))
                }),
            )
        }),
    )

    @Effect()
    public deleteUser$ = this.actions$.pipe(
        fromActionType(UsersActionTypes.DELETE_USER, (action: DeleteUser) => {
            return this.usersService.delete(action.payload).pipe(
                map(() => {
                    this.notificationService.success('User successfully deleted!')
                    return new DeleteUserSuccess(action.payload)
                }),
                catchError(error => {
                    this.notificationService.error('Error while deleting article!')
                    return of(new DeleteUserFail(error))
                }),
            )
        }),
    )

    @Effect({ dispatch: false })
    public deleteArticleSuccess$ = this.actions$.pipe(
        fromActionType(UsersActionTypes.DELETE_USER_SUCCESS, () => {
            return new Observable(observer => {
                this.router
                    .navigate(['/backend/users'])
                    .then(() => observer.complete())
                    .catch(error => observer.error(error))
            })
        }),
    )

    public constructor(
        private router: Router,
        private actions$: Actions,
        private notificationService: NotificationService,
        private usersService: UsersService,
    ) {}
}
