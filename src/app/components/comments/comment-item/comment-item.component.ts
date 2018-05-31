import { Component, OnInit, Input } from '@angular/core'

@Component({
    selector: 'cmp-comment-item',
    templateUrl: './comment-item.component.html',
    styleUrls: ['./comment-item.component.scss'],
})
export class CommentItemComponent implements OnInit {
    @Input() public even: boolean = false

    public constructor() {}

    public ngOnInit() {}
}
