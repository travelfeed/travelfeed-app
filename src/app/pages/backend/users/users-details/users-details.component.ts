import { Component, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import { User } from '../../../../store/users/user.model'
import { UsersState } from '../../../../store/users/users.reducer'
import { UsersAction, UsersActionTypes } from '../../../../store/users/users.action'

@Component({
    selector: 'cmp-users-details',
    templateUrl: './users-details.component.html',
    styleUrls: ['./users-details.component.scss'],
})
export class UsersDetailsComponent {
    @Input() public user: User

    public constructor(private store: Store<UsersState>) {}

    public save(): void {
        this.store.dispatch<UsersAction>({
            type: UsersActionTypes.SAVE_USER,
            payload: this.user,
        })
    }

    public delete(): void {
        this.store.dispatch<UsersAction>({
            type: UsersActionTypes.DELETE_USER,
            payload: this.user,
        })
    }
}
