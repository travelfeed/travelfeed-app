import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { FButtonType } from '../typings'

@Component({
    selector: 'cmp-f-button',
    templateUrl: './f-button.component.html',
    styleUrls: ['./f-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FButtonComponent {
    public static readonly cmpName: string = 'FButtonComponent'

    @Input() public type: FButtonType = 'button'

    @Input() public text: string

    @Input() public theme: string = ''

    @Input() public disabled: boolean = false

    @Output() public click: EventEmitter<void> = new EventEmitter()

    public constructor() {}

    public getThemeModifiers(): object {
        return this.theme
            .split(',')
            .reduce((prev, current) => ({ [`cmp-f-button--${current}`]: true, ...prev }), {})
    }
}
