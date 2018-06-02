import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { TranslateModule } from '@ngx-translate/core'
import { AppRoutingModule } from '../app-routing.module'
import { ToLocalePipe } from './to-locale/to-locale.pipe'
import { DynamicComponentsComponent } from './dynamic-components/dynamic-components.component'
import { DynamicComponentsDirective } from './dynamic-components/dynamic-components.directive'
import { EditableDirective } from './editable/editable.directive'
import { LanguagesService } from './languages/languages.service'
import { NotificationService } from './notification/notification.service'
import { NetworkService } from './network/network.service'
import { SocketService } from './socket/socket.service'

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, TranslateModule, AppRoutingModule],
    declarations: [
        ToLocalePipe,
        DynamicComponentsComponent,
        DynamicComponentsDirective,
        EditableDirective,
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        TranslateModule,
        AppRoutingModule,
        ToLocalePipe,
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
                LanguagesService,
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
