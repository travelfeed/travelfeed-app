import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core'
import { FColumnAlignments } from '../typings'

@Component({
    selector: 'cmp-f-column',
    templateUrl: './f-column.component.html',
    styleUrls: ['./f-column.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FColumnComponent {
    public static readonly cmpName: string = 'FColumnComponent'

    @Input() public flex: boolean = false

    @Input() public align: FColumnAlignments = 'left'

    public constructor() {}
}
