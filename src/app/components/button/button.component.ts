import { Component, OnInit, Input } from '@angular/core'

@Component({
    selector: 'cmp-btn',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
    @Input() public color: string
    @Input() public label: string = 'Buttontext'

    public constructor() {}

    public ngOnInit() {}
}
