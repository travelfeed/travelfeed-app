import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from '../../app-routing.module'
import { BackendNavigationComponent } from './backend-navigation.component'

@NgModule({
    imports: [CommonModule, AppRoutingModule],
    declarations: [BackendNavigationComponent],
    exports: [BackendNavigationComponent]
})
export class BackendNavigationModule {}
