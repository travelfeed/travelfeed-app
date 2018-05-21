import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { exhaustMap, map, catchError } from 'rxjs/operators'
import { UsersActionTypes, LoadUsersSuccess, LoadUsersFail, LoadUsers } from './users.action'
import { UsersService } from '../../pages/backend/users/users.service'

@Injectable()
export class UsersEffects {
    @Effect()
    public getArticles$ = this.actions$.pipe(
        ofType(UsersActionTypes.LOAD_USERS),
        exhaustMap((action: LoadUsers) => {
            return this.usersService.fetchUsers().pipe(
                map(articles => {
                    return new LoadUsersSuccess({
                        items: articles,
                        selected: action.payload,
                    })
                }),
                catchError(error => of(new LoadUsersFail(error))),
            )
        }),
    )

    public constructor(private actions$: Actions, private usersService: UsersService) {}
}
