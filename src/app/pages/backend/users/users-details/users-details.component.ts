import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { User } from '../../../../store/users/user.model'

@Component({
    selector: 'cmp-users-details',
    templateUrl: './users-details.component.html',
    styleUrls: ['./users-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersDetailsComponent {
    @Input() public user: User

    public constructor() {}
}
