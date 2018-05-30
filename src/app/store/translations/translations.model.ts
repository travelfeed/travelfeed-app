import { Language } from '../languages'

export interface TranslationKey {
    key: string
    default: string
}

export interface Translation {
    id: number
    key: TranslationKey
    value: string
    lang: Language
    created: string
    updated: string
}
