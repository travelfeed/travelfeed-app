export interface TranslationLanguage {
    id: string
    name: string
}

export interface TranslationKey {
    key: string
    default: string
}

export interface Translation {
    id: number
    lang: TranslationLanguage
    key: TranslationKey
    value: string
    created: Date
    updated: Date
}
