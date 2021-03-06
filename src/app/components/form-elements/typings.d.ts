import { AbstractControl } from '@angular/forms'

export const MODULE = 'form-elements'

export interface FValidation {
    type:
        | 'min'
        | 'max'
        | 'required'
        | 'requiredTrue'
        | 'email'
        | 'minLength'
        | 'maxLength'
        | 'pattern'
        | 'function'
    value?: string | number | ((control: AbstractControl) => any)
    message: string
}

export type FRowLayouts = '1' | '1-1' | '1-1-1' | '1-2' | '2-1'

export type FColumnAlignments = 'left' | 'right'

export interface FDateOptions {}

export interface FSelectPlaceholder {
    label: string
    value: any
    selectable: boolean
}

export interface FSelectOption {
    label: string
    value: any
}

export interface FRadiobuttonOption {
    label: string
    value: string
    checked: boolean
}

export type FButtonType = 'button' | 'submit'

export interface FValidationConfig {
    [key: string]: Array<FValidation>
}

export interface FExplanationConfig {
    [key: string]: Array<string>
}
