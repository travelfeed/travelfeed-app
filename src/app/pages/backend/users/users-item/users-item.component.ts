import { Component, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import { User } from '../../../../store/users/user.model'
import { UsersState } from '../../../../store/users/users.reducer'
import { UsersAction, UsersActionTypes } from '../../../../store/users/users.action'

@Component({
    selector: 'cmp-users-item',
    templateUrl: './users-item.component.html',
    styleUrls: ['./users-item.component.scss'],
})
export class UsersItemComponent {
    @Input() public user: User

    public constructor(private store: Store<UsersState>) {}

    public delete(event: Event): void {
        event.stopPropagation()

        this.store.dispatch<UsersAction>({
            type: UsersActionTypes.DELETE_USER,
            payload: this.user,
        })
    }
}
