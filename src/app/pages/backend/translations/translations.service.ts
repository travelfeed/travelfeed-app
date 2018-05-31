import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { environment } from '../../../../environments/environment'
import { ApiResponse } from '../../../shared/typings'
import { Language } from '../../../store/languages'
import { Translation, TranslationKey } from '../../../store/translations/translations.model'

@Injectable()
export class TranslationsService {
    private readonly baseUri: string = environment.apiBaseUrl

    public constructor(private http: HttpClient) {}

    public fetchTranslations(language: Language): Observable<ApiResponse<Array<Translation>>> {
        return this.http.get<ApiResponse<Array<Translation>>>(
            `${this.baseUri}/translation/keys/${language.id}`,
        )
    }

    public save(translation: Translation): Observable<ApiResponse<void>> {
        return this.http.post<ApiResponse<void>>(
            `${this.baseUri}/translation/${translation.id}`,
            translation,
        )
    }

    public delete(translation: Translation): Observable<ApiResponse<void>> {
        return this.http.delete<ApiResponse<void>>(`${this.baseUri}/translation/${translation.id}`)
    }

    public createKey(key: string): Observable<ApiResponse<TranslationKey>> {
        return this.http.post<ApiResponse<TranslationKey>>(`${this.baseUri}/translation/keys/create`, {
            key,
        })
    }
}
