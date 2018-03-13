import { Component, Input } from '@angular/core'

@Component({
    selector: 'cmp-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
    @Input() public type: string = 'button'
    @Input() public color: string
    @Input() public label: string = 'empty'

    public constructor() {}
}
