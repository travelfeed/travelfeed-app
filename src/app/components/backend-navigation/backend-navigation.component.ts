import { Component } from '@angular/core'
import { LocalStorage } from 'ngx-store'

@Component({
    selector: 'cmp-backend-navigation',
    templateUrl: './backend-navigation.component.html',
    styleUrls: ['./backend-navigation.component.scss']
})
export class BackendNavigationComponent {
    @LocalStorage('backendNavExpanded') public expanded: boolean = false

    public constructor() {}

    public toggleNavigation(): void {
        this.expanded = !this.expanded
    }
}
