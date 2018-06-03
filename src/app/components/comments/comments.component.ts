import { Component, OnInit, Input } from '@angular/core'
import { Article } from '../../store/articles'
import { CommentsService } from './comments.service'

@Component({
    selector: 'cmp-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
    @Input() public article: Article

    public constructor(public commentsService: CommentsService) {}

    public ngOnInit() {
        this.commentsService.fetchAll(this.article)
    }
}
