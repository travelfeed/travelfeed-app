import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs'
import { first, map } from 'rxjs/operators'
import { environment } from '../../../environments/environment'
import { ApiResponse } from '../../shared/typings'
import { User } from '../../store/users'
import { Article } from '../../store/articles'

export interface Comment {
    id: number
    text: string
    date: string
    visible: boolean
    user: User
    article: Article
}

@Injectable()
export class CommentsService {
    public comments$: BehaviorSubject<Array<Comment>> = new BehaviorSubject([])

    private readonly baseUri: string = environment.apiBaseUrl

    public constructor(private http: HttpClient) {}

    public fetchAll(article: Article): void {
        this.http
            .get<ApiResponse<Array<Comment>>>(`${this.baseUri}/comment/${article.id}/visible`)
            .subscribe(response => {
                this.comments$.next(response.data)
            })
    }

    public create(article: Article, text: string): Observable<void> {
        return this.http
            .post<ApiResponse<void>>(`${this.baseUri}/comment/${article.id}`, { text })
            .pipe(first(), map(() => this.fetchAll(article)))
    }

    public delete(article: Article, comment: Comment): Observable<void> {
        console.log(article, comment)
        return this.http
            .delete<ApiResponse<void>>(`${this.baseUri}/comment/${article.id}/${comment.id}`)
            .pipe(first(), map(() => this.fetchAll(article)))
    }
}
