import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IconModule } from '../icon/icon.module'
import { NavigationComponent } from './navigation.component'
import { HeadlinesModule } from '../../components/headlines/headlines.module'

@NgModule({
    imports: [CommonModule, IconModule, HeadlinesModule],
    declarations: [NavigationComponent],
    exports: [NavigationComponent],
})
export class NavigationModule {}
