import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment'
import { ApiResponse } from '../../../shared/typings'
import { Country } from '../../../store/countries/country.model'

@Injectable()
export class CountriesService {
    private readonly baseUri: string = environment.apiBaseUrl

    public constructor(private http: HttpClient) {}

    public fetchCountries(): Observable<ApiResponse<Array<Country>>> {
        return this.http.get<ApiResponse<Array<Country>>>(`${this.baseUri}/country`)
    }

    public fetchCount(): Observable<ApiResponse<Array<Country>>> {
        return this.http.get<ApiResponse<Array<Country>>>(`${this.baseUri}/country/count`)
    }

    public create(country: Partial<Country>): Observable<ApiResponse<Country>> {
        return this.http.post<ApiResponse<Country>>(`${this.baseUri}/country`, country)
    }

    public save(country: Country): Observable<void> {
        return this.http.post<void>(`${this.baseUri}/country/${country.id}`, country)
    }

    public delete(country: Country): Observable<void> {
        return this.http.delete<void>(`${this.baseUri}/country/${country.id}`)
    }
}
