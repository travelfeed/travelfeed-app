import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TravelPreviewComponent } from './travel-preview.component'

@NgModule({
    imports: [CommonModule],
    declarations: [TravelPreviewComponent],
    exports: [TravelPreviewComponent],
})
export class TravelPreviewModule {}
