import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Observable } from 'rxjs/Observable'
import { switchMap, map } from 'rxjs/operators'
import { environment } from '../../../../environments/environment'
import { ApiResponse } from '../../../shared/typings'
import { Translation, TranslationLanguage } from './typings'

@Injectable()
export class TranslationsService {
    public language$: BehaviorSubject<TranslationLanguage> = new BehaviorSubject(null)

    private readonly baseUri: string = environment.apiBaseUrl

    public constructor(private http: HttpClient) {}

    public fetchLanguages(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUri}/translation`)
    }

    public fetchTranslations(language: TranslationLanguage): Observable<Array<Translation>> {
        return this.http
            .get<ApiResponse>(`${this.baseUri}/translation/${language.id}`)
            .pipe(map((response: ApiResponse) => response.data as Array<Translation>))
    }

    public saveAll(translations: Array<Translation>): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`${this.baseUri}/translation`, translations)
    }

    public save(translation: Translation): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(
            `${this.baseUri}/translation/${translation.id}`,
            translation
        )
    }
}
