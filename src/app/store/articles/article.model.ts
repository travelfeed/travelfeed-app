import { User } from '../users/user.model'

export interface Article {
    id: number
    text: string
    title: string
    city: string
    country: string
    latitude: string
    longitude: string
    peaces: string
    user: User
    pictures: Array<any>
    comments: Array<any>
    published: boolean
}
