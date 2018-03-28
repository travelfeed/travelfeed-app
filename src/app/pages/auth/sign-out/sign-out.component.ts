import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '../auth.service'

@Component({
    selector: 'cmp-sign-out',
    templateUrl: './sign-out.component.html',
    styleUrls: ['./sign-out.component.scss']
})
export class SignOutComponent {
    public constructor(private router: Router, public authService: AuthService) {}

    public signout(): void {
        this.authService.signout().subscribe(() => {
            this.router.navigate(['/auth'])
        })
    }
}
