import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from '../../app-routing.module'
import { BackendNavigationComponent } from './backend-navigation.component'
import { IconModule } from '../icon/icon.module'
import { LinkModule } from '../link/link.module'

@NgModule({
    imports: [CommonModule, AppRoutingModule, IconModule, LinkModule],
    declarations: [BackendNavigationComponent],
    exports: [BackendNavigationComponent],
})
export class BackendNavigationModule {}
