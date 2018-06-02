import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { environment } from '../../../environments/environment'
import { ApiResponse } from '../../shared/typings'
import { Article } from '../../store/articles'

@Injectable()
export class TravelPreviewService {
    private readonly baseUri: string = environment.apiBaseUrl

    public constructor(private http: HttpClient) {}

    public fetchArticles(
        type: 'newest' | 'best-rated',
        order?: 'asc' | 'desc',
        limit?: number,
    ): Observable<Array<Article>> {
        let url = `${this.baseUri}/article/${type}`
        const params = []

        if (limit && typeof limit === 'number') {
            if (typeof order === 'string' && order.length > 0) {
                params.push(`order=${order}`)
            }

            params.push(`limit=${limit}`)
        } else {
            if (typeof order === 'string' && order.length > 0) {
                params.push(`order=${order}`)
            } else if (typeof order === 'number' && order > 0) {
                params.push(`limit=${order}`)
            }
        }

        if (params.length > 0) {
            url = `${url}?${params.join('&')}`
        }

        return this.http.get<ApiResponse<Array<Article>>>(url).pipe(map(response => response.data))
    }
}
