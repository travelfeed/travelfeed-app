import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TravelogueComponent } from './travelogue.component'
import { AgmCoreModule } from '@agm/core'

@NgModule({
    imports: [CommonModule, AgmCoreModule],
    declarations: [TravelogueComponent]
})
export class TravelogueModule {}
