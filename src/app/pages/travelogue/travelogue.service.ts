import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { environment } from '../../../environments/environment'
import { ApiResponse } from '../../shared/typings'
import { Article } from '../../store/articles'

@Injectable()
export class TravelogueService {
    private readonly baseUri: string = environment.apiBaseUrl

    public constructor(private http: HttpClient) {}

    public fetchArticle(id: number): Observable<Article> {
        return this.http
            .get<ApiResponse<Article>>(`${this.baseUri}/article/${id}`)
            .pipe(map(response => response.data))
    }
}
