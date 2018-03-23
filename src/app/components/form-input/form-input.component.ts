import { Component, Input } from '@angular/core'

@Component({
    selector: 'cmp-form-input',
    templateUrl: './form-input.component.html',
    styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent {
    @Input() public type: string = 'text'
    @Input() public name: string
    @Input() public label: string = 'empty'
    @Input() public autocomplete: string
    @Input() public icon: string = ''

    public constructor() {}
}
