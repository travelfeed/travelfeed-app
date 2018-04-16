import { Article } from '../articles/typings'

export interface User {
    id: number
    email: string
    userRole: any
    articles: Array<Article>
}
