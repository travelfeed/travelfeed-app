import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { TabsComponent } from './tabs/tabs.component'
import { TabComponent } from './tab/tab.component'

@NgModule({
    imports: [SharedModule.registerDynamicComponents([TabsComponent, TabComponent])],
    declarations: [TabsComponent, TabComponent],
    exports: [TabsComponent, TabComponent],
})
export class TabsModule {}
