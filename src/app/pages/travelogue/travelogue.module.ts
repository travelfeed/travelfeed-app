import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AgmCoreModule } from '@agm/core'
import { TravelogueComponent } from './travelogue.component'
import { ContainerModule } from '../../components/container/container.module'

@NgModule({
    imports: [CommonModule, AgmCoreModule, ContainerModule],
    declarations: [TravelogueComponent],
})
export class TravelogueModule {}
