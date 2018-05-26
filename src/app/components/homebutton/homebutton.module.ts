import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomebuttonComponent } from './homebutton.component'
import { AppRoutingModule } from '../../app-routing.module'
import { IconModule } from '../../components/icon/icon.module'

@NgModule({
    imports: [CommonModule, AppRoutingModule, IconModule],
    declarations: [HomebuttonComponent],
    exports: [HomebuttonComponent]
})
export class HomebuttonModule {}
