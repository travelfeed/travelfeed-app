import { Component, Input } from '@angular/core'
import { FormElement } from '../form-element'
import { FSelectOption } from '../typings'

@Component({
    selector: 'cmp-f-select',
    templateUrl: './f-select.component.html',
    styleUrls: ['./f-select.component.scss']
})
export class FSelectComponent extends FormElement {
    @Input() public options: Array<FSelectOption> = []
}
