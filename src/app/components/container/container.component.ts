import { Component, Input } from '@angular/core'
import { Type, Color } from './typings'

@Component({
    selector: 'cmp-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
    @Input() public type: Type = 'default'

    @Input() public color: Color

    public constructor() {}
}
