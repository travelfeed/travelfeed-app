import { Component, OnInit, OnDestroy } from '@angular/core'
import { Location } from '@angular/common'
import { Router } from '@angular/router'
import { takeWhile } from 'rxjs/operators'
import { AuthService } from '../auth.service'
import { UsersService } from '../../backend/users/users.service'
import { User } from '../../backend/users/typings'

@Component({
    selector: 'cmp-sign-out',
    templateUrl: './sign-out.component.html',
    styleUrls: ['./sign-out.component.scss'],
})
export class SignOutComponent implements OnInit, OnDestroy {
    public user: User

    private alive: boolean = true

    public constructor(
        private location: Location,
        private router: Router,
        public authService: AuthService,
        private usersService: UsersService,
    ) {}

    public ngOnInit(): void {
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['/auth/signin'])
        }

        this.usersService
            .fetchUser(parseInt(this.authService.userId, 10))
            .pipe(takeWhile(() => this.alive))
            .subscribe((user: User) => {
                this.user = user
            })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }

    public back(): void {
        this.location.back()
    }

    public signout(): void {
        this.authService.signout().subscribe(() => {
            this.router.navigate(['/auth/signin'])
        })
    }
}
