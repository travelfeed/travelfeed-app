import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { User } from '../../../../store/users/user.model'

@Component({
    selector: 'cmp-users-item',
    templateUrl: './users-item.component.html',
    styleUrls: ['./users-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersItemComponent {
    @Input() public user: User

    public constructor() {}

    public delete(user): void {
        console.log('==> you want to delete', user)
    }
}
