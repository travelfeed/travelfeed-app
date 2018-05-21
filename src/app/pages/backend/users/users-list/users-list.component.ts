import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { User } from '../../../../store/users/user.model'

@Component({
    selector: 'cmp-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
    @Input() public users: Array<User>

    public constructor() {}
}
