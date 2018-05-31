import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { environment } from '../../../environments/environment'
import { ApiResponse } from '../typings'
import { Language } from '../../store/languages'

@Injectable()
export class LanguagesService {
    private readonly baseUri: string = environment.apiBaseUrl

    public constructor(private http: HttpClient) {}

    public fetchLanguages(): Observable<ApiResponse<Array<Language>>> {
        return this.http.get<ApiResponse<Array<Language>>>(`${this.baseUri}/language`)
    }
}
