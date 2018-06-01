import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { IconModule } from '../../components/icon/icon.module'
import { TravelPreviewComponent } from './travel-preview.component'

@NgModule({
    imports: [SharedModule, IconModule],
    declarations: [TravelPreviewComponent],
    exports: [TravelPreviewComponent],
})
export class TravelPreviewModule {}
