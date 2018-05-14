import { Component, OnInit, OnDestroy } from '@angular/core'
import { UsersService } from '../users.service'
import { takeWhile } from 'rxjs/operators'
import { User } from '../typings'

@Component({
    selector: 'cmp-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit, OnDestroy {
    public users: Array<User>

    private alive: boolean = true

    public constructor(private usersService: UsersService) {}

    public ngOnInit(): void {
        this.usersService.users$
            .pipe(takeWhile(() => this.alive))
            .subscribe((users: Array<User>) => {
                this.users = users
            })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
