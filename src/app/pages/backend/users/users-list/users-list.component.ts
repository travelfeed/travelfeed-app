import { Component, AfterViewInit, Input, ChangeDetectionStrategy } from '@angular/core'
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
export class UsersListComponent implements AfterViewInit {
    @Input() public users: Array<User>

    public createMode: boolean = false

    public title: FormControl = new FormControl()

    public constructor(private router: Router, private store: Store<UsersState>) {}

    public ngAfterViewInit(): void {
        this.title.setValue('')
    }

    public select(user: User): void {
        this.router.navigate(['/backend/users/', user.id])
    }

    public toggle(): void {
        this.createMode = !this.createMode

        if (this.title.touched) {
            this.title.setValue('')
        }
    }

    public create(): void {
        this.store.dispatch<UsersAction>({
            type: UsersActionTypes.CREATE_USER,
            payload: this.title.value,
        })

        this.createMode = false
        this.title.setValue('')
    }
}
