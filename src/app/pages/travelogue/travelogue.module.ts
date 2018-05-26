import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TravelogueComponent } from './travelogue.component'
import { AgmCoreModule } from '@agm/core'
import { ContainerModule } from '../../components/container/container.module'
import { IconModule } from '../../components/icon/icon.module'
import { HomebuttonModule } from '../../components/homebutton/homebutton.module'
import { FormElementsModule } from '../../components/form-elements/form-elements.module'
import { CommentsModule } from '../../components/comments/comments.module'

@NgModule({
    imports: [
        CommonModule,
        AgmCoreModule,
        ContainerModule,
        IconModule,
        HomebuttonModule,
        FormElementsModule,
        CommentsModule
    ],
    declarations: [TravelogueComponent]
})
export class TravelogueModule {}
