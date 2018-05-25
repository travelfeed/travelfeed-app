import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'
import { DynamicComponentsComponent } from './dynamic-components/dynamic-components.component'
import { DynamicComponentsDirective } from './dynamic-components/dynamic-components.directive'
import { EditableDirective } from './editable/editable.directive'
import { NotificationService } from './notification/notification.service'
import { NetworkService } from './network/network.service'
import { SocketService } from '../services/socket/socket.service'

@NgModule({
    imports: [CommonModule, TranslateModule],
    declarations: [DynamicComponentsComponent, DynamicComponentsDirective, EditableDirective],
    exports: [
        CommonModule,
        TranslateModule,
        DynamicComponentsComponent,
        DynamicComponentsDirective,
        EditableDirective,
    ],
})
export class SharedModule {
    public static registerDynamicComponents(components: Array<any>) {
        return {
            ngModule: SharedModule,
            providers: [
                NotificationService,
                NetworkService,
                SocketService,
                {
                    provide: ANALYZE_FOR_ENTRY_COMPONENTS,
                    useValue: components,
                    multi: true,
                },
            ],
        }
    }
}
