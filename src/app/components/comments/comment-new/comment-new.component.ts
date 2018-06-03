import { Component, Input } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Article } from '../../../store/articles'
import { NotificationService } from '../../../shared/notification/notification.service'
import { CommentsService } from '../comments.service'

@Component({
    selector: 'cmp-comment-new',
    templateUrl: './comment-new.component.html',
    styleUrls: ['./comment-new.component.scss'],
})
export class CommentNewComponent {
    @Input() public article: Article

    public input: FormControl = new FormControl('')

    public constructor(
        private notificationService: NotificationService,
        private commentsService: CommentsService,
    ) {}

    public submit(): void {
        this.commentsService
            .create(this.article, this.input.value)
            .subscribe(
                () => this.input.reset(''),
                () => this.notificationService.error('Could not comment on this post.'),
            )
    }
}
