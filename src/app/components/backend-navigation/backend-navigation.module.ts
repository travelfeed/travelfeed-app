import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { BackendNavigationComponent } from './backend-navigation.component'
import { IconModule } from '../icon/icon.module'
import { LinkModule } from '../link/link.module'

@NgModule({
    imports: [SharedModule, IconModule, LinkModule],
    declarations: [BackendNavigationComponent],
    exports: [BackendNavigationComponent],
})
export class BackendNavigationModule {}
