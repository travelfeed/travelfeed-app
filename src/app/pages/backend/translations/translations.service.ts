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

    public translations$: BehaviorSubject<Array<Translation>> = new BehaviorSubject([])

    private readonly baseUri: string = environment.apiBaseUrl

    public constructor(private http: HttpClient) {}

    public fetchLanguages(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.baseUri}/translation`).pipe()
    }

    public fetchTranslations(language: TranslationLanguage): Observable<void> {
        return this.http.get<ApiResponse>(`${this.baseUri}/translation/${language.id}`).pipe(
            map((response: ApiResponse) => response.data as Array<Translation>),
            map((translations: Array<Translation>) => {
                this.translations$.next(translations)
            }),
        )
    }

    public save(translation: Translation): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(
            `${this.baseUri}/translation/${translation.id}`,
            translation,
        )
    }

    public delete(translation: Translation): Observable<void> {
        return this.http
            .delete<ApiResponse>(`${this.baseUri}/translation/${translation.id}`)
            .pipe(
                switchMap(response => this.language$),
                switchMap(language => this.fetchTranslations(language)),
            )
    }
}
