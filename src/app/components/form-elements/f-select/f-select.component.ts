import { Component, Input } from '@angular/core'
import { FInputComponent } from '../f-input/f-input.component'
import { FSelectPlaceholder, FSelectOption } from '../typings'

@Component({
    selector: 'cmp-f-select',
    templateUrl: './f-select.component.html',
    styleUrls: ['./f-select.component.scss'],
})
export class FSelectComponent extends FInputComponent {
    public static readonly cmpName: string = 'FSelectComponent'

    @Input() public placeholder: FSelectPlaceholder

    @Input() public options: Array<FSelectOption> = []

    public getClasses(baseClass: string): object {
        const prefixed = modifier => `${baseClass}--${modifier}`
        const results = super.getClasses(baseClass)

        results[prefixed('filled')] = (this.fc.value && this.fc.value !== '') || this.placeholder

        return results
    }

    public isSelected(option: FSelectOption): boolean {
        if (option && option.value && option.value.id && this.fc.value && this.fc.value.id) {
            return option.value.id === this.fc.value.id
        }

        return false
    }
}
