import { Component } from '@angular/core'
import { UsersService } from '../users.service'

@Component({
    selector: 'cmp-users-details',
    templateUrl: './users-details.component.html',
    styleUrls: ['./users-details.component.scss'],
})
export class UsersDetailsComponent {
    public constructor(public usersService: UsersService) {}
}
