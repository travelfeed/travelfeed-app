import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { takeWhile, switchMap } from 'rxjs/operators'
import { UsersService } from './users.service'
import { User } from './typings'

@Component({
    selector: 'cmp-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
    public users: Array<User> = []

    private params: ParamMap

    private alive: boolean = true

    public constructor(
        private router: Router,
        private route: ActivatedRoute,
        private usersService: UsersService
    ) {}

    public ngOnInit(): void {
        this.route.paramMap
            .pipe(
                takeWhile(() => this.alive),
                switchMap((params: ParamMap) => {
                    this.params = params
                    return this.usersService.fetchUsers()
                })
            )
            .subscribe((users: Array<User>) => {
                // redirect to first user if id is not present
                if (!this.params.has('id')) {
                    return this.router.navigate(['/backend/users', users[0].id])
                }

                // select user of current id
                const id = this.params.get('id')
                const user = users.find(item => item.id === parseInt(id, 10))

                // inject users into service and select first one
                this.usersService.users$.next(users)
                this.usersService.selected$.next(user)
            })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
