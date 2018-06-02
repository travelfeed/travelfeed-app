import { User } from '../users/user.model'

export interface Article {
    id: number
    title: string
    subtitle: string
    text: string
    city: string
    country: string
    latitude: string
    longitude: string
    peaces: string
    readingtime: number
    published: boolean
    created: number
    updated: number
    user: User
    pictures: Array<any>
}
