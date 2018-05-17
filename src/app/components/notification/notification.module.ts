import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IconModule } from '../icon/icon.module'
import { NotificationComponent } from './notification.component'

@NgModule({
    imports: [CommonModule, IconModule],
    declarations: [NotificationComponent],
    exports: [NotificationComponent],
})
export class NotificationModule {}
