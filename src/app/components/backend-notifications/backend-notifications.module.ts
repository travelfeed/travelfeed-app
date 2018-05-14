import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BackendNotificationsComponent } from './backend-notifications.component'
import { BackendNotificationsService } from './backend-notifications.service'

@NgModule({
    imports: [CommonModule],
    declarations: [BackendNotificationsComponent],
    exports: [BackendNotificationsComponent],
    providers: [BackendNotificationsService],
})
export class BackendNotificationsModule {}
