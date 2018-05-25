import { Article } from '../articles/article.model'

export interface User {
    id: number
    email: string
    userRole: any
    articles: Array<Article>
}
