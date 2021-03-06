import { Component, OnInit, Input } from '@angular/core'
import { AbstractControl, FormControl, ValidatorFn, Validators } from '@angular/forms'
import { FValidation } from '../typings'

@Component({
    selector: 'cmp-f-input',
    templateUrl: './f-input.component.html',
    styleUrls: ['./f-input.component.scss'],
})
export class FInputComponent implements OnInit {
    public static readonly cmpName: string = 'FInputComponent'

    @Input() public name: string

    @Input() public label: string

    @Input() public fc: AbstractControl = new FormControl()

    @Input() public validation: Array<FValidation> = []

    @Input() public explanation: Array<string> = []

    @Input() public autocomplete: string

    @Input() public autofocus: boolean

    public focus: boolean = false

    public constructor() {}

    public ngOnInit(): void {
        this.setValidators()
    }

    public getClasses(baseClass: string): object {
        if (!this.fc) {
            return {}
        }

        const prefixed = modifier => `${baseClass}--${modifier}`

        return {
            [prefixed('focus')]: this.focus,
            [prefixed('filled')]: this.fc.value && this.fc.value !== '',
            [prefixed('invalid')]: this.fc.touched && !this.fc.valid,
            [prefixed('required')]: this.isRequired(),
        }
    }

    public isRequired(): boolean {
        return !!this.validation.find(({ type }) => type === 'required' || type === 'requiredTrue')
    }

    public focusIn(): void {
        this.focus = true
    }

    public focusOut(): void {
        this.focus = false
    }

    private setValidators(): void {
        const validators: Array<ValidatorFn> = []

        this.validation.forEach(({ type, value }) => {
            if (type === 'function') {
                validators.push(value as ValidatorFn)
            }

            if (Validators[type] && typeof Validators[type] === 'function') {
                validators.push(value ? (Validators[type] as any)(value) : Validators[type])
            }
        })

        this.fc.setValidators(validators)
    }
}
