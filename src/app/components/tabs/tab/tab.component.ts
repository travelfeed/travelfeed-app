import { Component, Input } from '@angular/core'

@Component({
    selector: 'cmp-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
    public static readonly cmpName: string = 'TabComponent'

    @Input() public label: string

    @Input() public active: boolean = false

    public constructor() {}
}
