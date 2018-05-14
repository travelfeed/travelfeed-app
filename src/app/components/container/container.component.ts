import { Component, Input } from '@angular/core'

@Component({
    selector: 'cmp-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
    @Input() public type: string = 'default'

    @Input() public color: string

    public constructor() {}
}
