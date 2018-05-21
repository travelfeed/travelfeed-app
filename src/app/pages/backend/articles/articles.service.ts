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
}
