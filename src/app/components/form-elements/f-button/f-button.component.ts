import { Component, Input } from '@angular/core'
import { FormElement } from '../form-element'

@Component({
    selector: 'cmp-f-button',
    templateUrl: './f-button.component.html',
    styleUrls: ['./f-button.component.scss']
})
export class FButtonComponent {
    @Input() public type: string = 'button'

    @Input() public text: string

    @Input() public theme: string = ''

    @Input() public disabled: boolean = false

    public constructor() {}

    public getThemeModifiers(): object {
        return this.theme.split(',').reduce(
            (prev, current) => ({
                ...prev,
                [`cmp-f-button--${current}`]: true
            }),
            {}
        )
    }
}
