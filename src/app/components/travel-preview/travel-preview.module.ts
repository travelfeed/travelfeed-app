import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { HeadlinesModule } from '../headlines/headlines.module'
import { IconModule } from '../../components/icon/icon.module'
import { TravelPreviewComponent } from './travel-preview.component'
import { TravelPreviewService } from './travel-preview.service'

@NgModule({
    imports: [SharedModule, HeadlinesModule, IconModule],
    declarations: [TravelPreviewComponent],
    exports: [TravelPreviewComponent],
    providers: [TravelPreviewService],
})
export class TravelPreviewModule {}
