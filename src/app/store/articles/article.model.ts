export interface Article {
    id: number
    title: string
    city: string
    country: string
    latitude: string
    longitude: string
    peaces: string
    user: any
    articleText: Array<any>
    pictures: Array<any>
    comments: Array<any>
    published: boolean
}
