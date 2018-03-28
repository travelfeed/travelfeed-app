import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { switchMap, map } from 'rxjs/operators'
import { of } from 'rxjs/observable/of'
import { LocalStorage } from 'ngx-store'
import { environment } from '../../../environments/environment'
import { ApiResponse, User } from './typings'

@Injectable()
export class AuthService {
    @LocalStorage() public userId: string

    @LocalStorage() public authToken: string

    private readonly baseUri: string = environment.apiBaseUrl

    public constructor(private http: HttpClient) {}

    public signin(email: string, password: string): Observable<User> {
        console.log('==> AuthService::signin')
        return this.http
            .post<ApiResponse>(`${this.baseUri}/auth/signin`, {
                email: email,
                password: password
            })
            .pipe(
                switchMap(({ status, data }: ApiResponse) => {
                    if (status < 200 || status >= 300) {
                        return of(null)
                    }

                    this.userId = data.userId
                    this.authToken = data.authToken

                    return this.http.get<ApiResponse>(`${this.baseUri}/user/${data.userId}`)
                })
            )
    }

    public signout() {
        console.log('==> AuthService::signout')
        return this.http.post<ApiResponse>(`${this.baseUri}/auth/signout`, null).pipe(
            map(({ status, data }: ApiResponse) => {
                this.userId = null
                this.authToken = null

                return null
            })
        )
    }

    public register(username: string, password: string, email: string) {
        console.log('==> AuthService::register')
        return this.http
            .post<ApiResponse>(`${this.baseUri}/auth/register`, {
                username: username,
                password: password,
                email: email
            })
            .pipe(
                switchMap(({ status, data }: ApiResponse) => {
                    if (status < 200 || status >= 300) {
                        return of(null)
                    }

                    this.userId = data.userId
                    this.authToken = data.authToken

                    return this.http.get<ApiResponse>(`${this.baseUri}/user/${data.userId}`)
                })
            )
    }

    public isSignedIn(): Observable<boolean> {
        return of(this.authToken !== null && this.userId !== null)
    }
}
