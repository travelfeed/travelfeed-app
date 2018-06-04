import { User } from '../users/user.model'
import { Country } from '../../pages/country/country.service'

export interface Article {
    id: number
    title: string
    subtitle: string
    text: string
    city: string
    country: Country
    latitude: number
    longitude: number
    peaces: string
    readingtime: number
    published: boolean
    created: number
    updated: number
    user: User
    pictures: Array<any>
}
