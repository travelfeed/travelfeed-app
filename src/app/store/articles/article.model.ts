import { User } from '../users/user.model'

export interface Article {
    id: number
    title: string
    text: string
    city: string
    country: string
    latitude: string
    longitude: string
    peaces: string
    published: boolean
    created: number
    updated: number
    user: User
    pictures: Array<any>
}
