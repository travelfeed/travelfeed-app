import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { Router } from '@angular/router'
import { FormControl } from '@angular/forms'
import { Store } from '@ngrx/store'
import { User } from '../../../../store/users/user.model'
import { UsersState } from '../../../../store/users/users.reducer'
import { UsersAction, UsersActionTypes } from '../../../../store/users/users.action'

@Component({
    selector: 'cmp-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
    @Input() public users: Array<User>

    public createMode: boolean = false

    public email: FormControl = new FormControl('')

    public constructor(private router: Router, private store: Store<UsersState>) {}

    public select(user: User): void {
        this.router.navigate(['/backend/users/', user.id])
    }

    public toggle(): void {
        if (this.createMode) {
            this.email.reset('')
        }

        this.createMode = !this.createMode
    }

    public create(): void {
        this.store.dispatch<UsersAction>({
            type: UsersActionTypes.CREATE_USER,
            payload: this.email.value,
        })

        this.toggle()
    }
}
