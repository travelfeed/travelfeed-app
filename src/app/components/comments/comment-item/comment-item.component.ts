import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { Article } from '../../../store/articles'
import { NotificationService } from '../../../shared/notification/notification.service'
import { Comment, CommentsService } from '../comments.service'

@Component({
    selector: 'cmp-comment-item',
    templateUrl: './comment-item.component.html',
    styleUrls: ['./comment-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentItemComponent {
    @Input() public article: Article

    @Input() public comment: Comment

    @Input() public even: boolean = false

    public constructor(
        private notificationService: NotificationService,
        private commentsService: CommentsService,
    ) {}

    public delete(comment: Comment): void {
        this.commentsService
            .delete(this.article, comment)
            .subscribe(() => {}, () => this.notificationService.error('Could not delete comment.'))
    }
}
