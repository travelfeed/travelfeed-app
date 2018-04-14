import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Observable } from 'rxjs/Observable'
import { switchMap, map } from 'rxjs/operators'
import { environment } from '../../../../environments/environment'
import { ApiResponse } from '../../../shared/typings'
import { Article } from './typings'

@Injectable()
export class ArticlesService {
    public articles$: BehaviorSubject<Array<Article>> = new BehaviorSubject([])

    public selected$: BehaviorSubject<Article> = new BehaviorSubject(null)

    private readonly baseUri: string = environment.apiBaseUrl

    public constructor(private http: HttpClient) {}

    public fetchArticles(): Observable<Array<Article>> {
        return this.http.get<ApiResponse>(`${this.baseUri}/article`).pipe(
            map((response: ApiResponse) => {
                return response.data as Array<Article>
            })
        )
    }

    public fetchArticle(articleId: number): Observable<Article> {
        return this.http.get<ApiResponse>(`${this.baseUri}/article/${articleId}`).pipe(
            map((response: ApiResponse) => {
                return response.data as Article
            })
        )
    }
}
