import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IconModule } from '../icon/icon.module'
import { NavigationComponent } from './navigation.component'

@NgModule({
    imports: [CommonModule, IconModule],
    declarations: [NavigationComponent],
    exports: [NavigationComponent]
})
export class NavigationModule {}
