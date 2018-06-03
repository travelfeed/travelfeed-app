import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { FormElementsModule } from '../form-elements/form-elements.module'
import { IconModule } from './../icon/icon.module'
import { CommentsComponent } from './comments.component'
import { CommentItemComponent } from './comment-item/comment-item.component'
import { CommentNewComponent } from './comment-new/comment-new.component'
import { CommentsService } from './comments.service'

@NgModule({
    imports: [SharedModule, FormElementsModule, IconModule],
    declarations: [CommentsComponent, CommentItemComponent, CommentNewComponent],
    exports: [CommentsComponent],
    providers: [CommentsService],
})
export class CommentsModule {}
