import { Component, AfterViewInit, Input } from '@angular/core'
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
})
export class UsersListComponent implements AfterViewInit {
    @Input() public users: Array<User>

    public createMode: boolean = false

    public email: FormControl = new FormControl()

    public constructor(private router: Router, private store: Store<UsersState>) {}

    public ngAfterViewInit(): void {
        this.email.setValue('')
    }

    public select(user: User): void {
        this.router.navigate(['/backend/users/', user.id])
    }

    public toggle(): void {
        this.createMode = !this.createMode

        if (this.email.touched) {
            this.email.setValue('')
        }
    }

    public create(): void {
        this.store.dispatch<UsersAction>({
            type: UsersActionTypes.CREATE_USER,
            payload: this.email.value,
        })

        this.createMode = false
        this.email.setValue('')
    }
}
