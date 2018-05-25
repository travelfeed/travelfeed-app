import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TravelPreviewComponent } from './travel-preview.component'
import { IconModule } from '../../components/icon/icon.module'

@NgModule({
    imports: [CommonModule, IconModule],
    declarations: [TravelPreviewComponent],
    exports: [TravelPreviewComponent]
})
export class TravelPreviewModule {}
