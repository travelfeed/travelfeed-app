import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CommentsComponent } from './comments.component'
import { CommentItemComponent } from './comment-item/comment-item.component'
import { IconModule } from './../icon/icon.module'

@NgModule({
    imports: [CommonModule, IconModule],
    declarations: [CommentsComponent, CommentItemComponent],
    exports: [CommentsComponent],
})
export class CommentsModule {}
