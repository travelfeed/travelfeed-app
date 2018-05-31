import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'cmp-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
    public comments: Array<any> = [
        { user: 'DennisFritsch', text: 'Testtexte', updated: '26.05.2018' },
        { user: 'IvanNikic', text: 'Ein richtig geiler Text', updated: '22.05.2018' },
    ]

    public constructor() {}

    public ngOnInit() {}
}
