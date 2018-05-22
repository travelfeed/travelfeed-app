import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { map } from 'rxjs/operators'
import { environment } from '../../../../environments/environment'
import { ApiResponse } from '../../../shared/typings'
import { Article } from '../../../store/articles/article.model'

@Injectable()
export class ArticlesService {
    private readonly baseUri: string = environment.apiBaseUrl

    public constructor(private http: HttpClient) {}

    public fetchArticles(): Observable<Array<Article>> {
        return this.http.get<ApiResponse>(`${this.baseUri}/article`).pipe(
            map((response: ApiResponse) => {
                return response.data as Array<Article>
            }),
        )
    }

    public create(article: Partial<Article>): Observable<Article> {
        return this.http.post<ApiResponse>(`${this.baseUri}/article`, article).pipe(
            map((response: ApiResponse) => {
                return response.data as Article
            }),
        )
    }

    public save(article: Article): Observable<void> {
        return this.http.post<void>(`${this.baseUri}/article/${article.id}`, article)
    }

    public delete(article: Article): Observable<void> {
        return this.http.delete<void>(`${this.baseUri}/article/${article.id}`)
    }

    public publish(article: Article): Observable<void> {
        return this.http.post<void>(`${this.baseUri}/article/${article.id}`, {
            ...article,
            published: true,
        })
    }

    public unpublish(article: Article): Observable<void> {
        return this.http.post<void>(`${this.baseUri}/article/${article.id}`, {
            ...article,
            published: false,
        })
    }
}
