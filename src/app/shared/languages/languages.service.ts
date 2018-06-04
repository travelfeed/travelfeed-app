import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs'
import { environment } from '../../../environments/environment'
import { ApiResponse } from '../typings'
import { Language } from '../../store/languages'

@Injectable()
export class LanguagesService {
    public language$: BehaviorSubject<string> = new BehaviorSubject('en')

    private readonly baseUri: string = environment.apiBaseUrl

    public constructor(private http: HttpClient) {}

    public fetchLanguages(): Observable<ApiResponse<Array<Language>>> {
        return this.http.get<ApiResponse<Array<Language>>>(`${this.baseUri}/language`)
    }
}
