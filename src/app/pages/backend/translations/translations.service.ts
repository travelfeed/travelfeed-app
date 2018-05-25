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

    public fetchLanguages(): Observable<ApiResponse<any>> {
        return this.http.get<ApiResponse<any>>(`${this.baseUri}/translation`)
    }

    public fetchTranslations(language: TranslationLanguage): Observable<void> {
        return this.http
            .get<ApiResponse<Array<Translation>>>(`${this.baseUri}/translation/${language.id}`)
            .pipe(
                map((response: ApiResponse<Array<Translation>>) => {
                    this.translations$.next(response.data)
                }),
            )
    }

    public save(translation: Translation): Observable<ApiResponse<void>> {
        return this.http.post<ApiResponse<void>>(
            `${this.baseUri}/translation/${translation.id}`,
            translation,
        )
    }

    public delete(translation: Translation): Observable<void> {
        return this.http
            .delete<ApiResponse<void>>(`${this.baseUri}/translation/${translation.id}`)
            .pipe(
                switchMap(() => this.language$),
                switchMap(language => this.fetchTranslations(language)),
            )
    }
}
