import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { switchMap } from 'rxjs/operators'
import { of } from 'rxjs/observable/of'
import { environment } from '../../../environments/environment'
import { ApiResponse } from '../../typings'
import { User } from './typings'

@Injectable()
export class AuthService {
    private readonly baseUri: string = environment.apiBaseUrl

    public constructor(private http: HttpClient) {}

    public signin(username: string, password: string): Observable<User> {
        return this.http
            .post<ApiResponse>(`${this.baseUri}/auth/signin`, {
                username: username,
                password: password
            })
            .pipe(
                switchMap(({ status, data }: ApiResponse) => {
                    if (status < 200 || status >= 300) {
                        return of(null)
                    }

                    this.userId = data.userId
                    this.authToken = data.authToken

                    return this.http.get<User>(`${this.baseUri}/users/${data.userId}`)
                })
            )
    }

    public signout() {
        this.userId = null
        this.authToken = null
    }

    public isSignedIn(): Observable<boolean> {
        return of(this.authToken !== null && this.userId !== null)
    }

    public set userId(userId: string) {
        if (userId === null) {
            localStorage.removeItem('userId')
        } else {
            localStorage.setItem('userId', userId)
        }
    }

    public get userId(): string {
        return localStorage.getItem('userId')
    }

    public set authToken(authToken: string) {
        if (authToken === null) {
            localStorage.removeItem('authToken')
        } else {
            localStorage.setItem('authToken', authToken)
        }
    }

    public get authToken(): string {
        return localStorage.getItem('authToken')
    }
}
