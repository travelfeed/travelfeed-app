import { NgModule } from '@angular/core'
import { AgmCoreModule } from '@agm/core'
import { SharedModule } from '../../shared/shared.module'
import { ContainerModule } from '../../components/container/container.module'
import { IconModule } from '../../components/icon/icon.module'
import { HomebuttonModule } from '../../components/homebutton/homebutton.module'
import { FormElementsModule } from '../../components/form-elements/form-elements.module'
import { CommentsModule } from '../../components/comments/comments.module'
import { TravelogueComponent } from './travelogue.component'

@NgModule({
    imports: [
        SharedModule,
        AgmCoreModule,
        ContainerModule,
        IconModule,
        HomebuttonModule,
        FormElementsModule,
        CommentsModule,
    ],
    declarations: [TravelogueComponent],
})
export class TravelogueModule {}
