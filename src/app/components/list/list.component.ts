import { Component, Input } from '@angular/core'

@Component({
    selector: 'cmp-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {
    @Input() public title: string

    @Input() public items: Array<string> = []

    public constructor() {}
}
