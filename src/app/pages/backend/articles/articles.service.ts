import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { environment } from '../../../../environments/environment'
import { ApiResponse } from '../../../shared/typings'
import { Article } from '../../../store/articles'

@Injectable()
export class ArticlesService {
    private readonly baseUri: string = environment.apiBaseUrl

    public constructor(private http: HttpClient) {}

    public fetchArticles(): Observable<ApiResponse<Array<Article>>> {
        return this.http.get<ApiResponse<Array<Article>>>(`${this.baseUri}/article`)
    }

    public create(article: Partial<Article>): Observable<ApiResponse<Article>> {
        return this.http.post<ApiResponse<Article>>(`${this.baseUri}/article`, article)
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
