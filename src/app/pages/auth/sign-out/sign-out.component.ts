import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'
import { Router } from '@angular/router'
import { AuthService } from '../auth.service'

@Component({
    selector: 'cmp-sign-out',
    templateUrl: './sign-out.component.html',
    styleUrls: ['./sign-out.component.scss'],
})
export class SignOutComponent implements OnInit {
    public constructor(
        private location: Location,
        private router: Router,
        public authService: AuthService,
    ) {}

    public ngOnInit(): void {
        if (!this.authService.isAuthenticated()) {
            this.signout()
        }
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
