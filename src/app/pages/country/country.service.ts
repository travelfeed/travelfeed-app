import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment'
import { ApiResponse } from '../../shared/typings'
import { map } from 'rxjs/operators'

export interface Country {
    id: number
    name: string
    code: string
    articles: number
}

@Injectable()
export class CountryService {
    private readonly baseUri: string = environment.apiBaseUrl

    public constructor(private http: HttpClient) {}

    public fetchAll(): Observable<Array<Country>> {
        return this.http
            .get<ApiResponse<Array<Country>>>(`${this.baseUri}/country/count`)
            .pipe(map(response => response.data))
    }
}
