import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { IconModule } from '../../components/icon/icon.module'
import { HomebuttonComponent } from './homebutton.component'

@NgModule({
    imports: [SharedModule, IconModule],
    declarations: [HomebuttonComponent],
    exports: [HomebuttonComponent],
})
export class HomebuttonModule {}
