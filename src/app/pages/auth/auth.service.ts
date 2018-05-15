import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { switchMap, map } from 'rxjs/operators'
import { LocalStorage } from 'ngx-store'
import { environment } from '../../../environments/environment'
import { ApiResponse } from '../../shared/typings'
import { User } from './typings'

@Injectable()
export class AuthService {
    @LocalStorage() public userId: string = null

    @LocalStorage() public authToken: string = null

    @LocalStorage() public refreshToken: string = null

    private readonly baseUri: string = environment.apiBaseUrl

    public constructor(private http: HttpClient) {}

    /**
     * Signs the given user in with the given data and returns the user data.
     *
     * @param {string} email
     * @param {string} password
     * @returns {Observable<User>}
     */
    public signin(email: string, password: string): Observable<any> {
        this.userId = ''
        this.authToken = ''
        this.refreshToken = ''

        return this.http
            .post<ApiResponse>(`${this.baseUri}/auth/signin`, {
                email: email,
                password: password,
            })
            .pipe(
                map(({ status, data }: ApiResponse) => {
                    if (status < 200 || status >= 300) {
                        return of(null)
                    }

                    this.userId = data.userId
                    this.authToken = data.authToken
                    this.refreshToken = data.refreshToken

                    return of(null)
                }),
            )
    }

    /**
     * Signs the user out of the application.
     *
     * @returns {Observable<ApiResponse>}
     */
    public signout(): Observable<ApiResponse> {
        this.userId = ''
        this.authToken = ''
        this.refreshToken = ''

        return this.http.post<ApiResponse>(`${this.baseUri}/auth/signout`, null)
    }

    /**
     * Tries to refresh the user auth session using the stored refresh token.
     *
     * @returns {Observable<ApiResponse>}
     */
    public refresh(): Observable<ApiResponse> {
        return this.http
            .post<ApiResponse>(`${this.baseUri}/auth/refresh`, {
                userId: this.userId,
                refreshToken: this.refreshToken,
            })
            .pipe(
                map((response: ApiResponse) => {
                    this.authToken = response.data.authToken
                    this.refreshToken = response.data.refreshToken

                    return response
                }),
            )
    }

    /**
     * Registers the user with the given data.
     *
     * @param {string} username
     * @param {string} password
     * @param {stirng} email
     * @returns {Observable<ApiResponse>}
     */
    public register(username: string, password: string, email: string): Observable<any> {
        return this.http
            .post<ApiResponse>(`${this.baseUri}/auth/register`, {
                username: username,
                password: password,
                email: email,
            })
            .pipe(
                map(({ status, data }: ApiResponse) => {
                    if (status < 200 || status >= 300) {
                        return of(null)
                    }

                    this.userId = data.userId
                    this.authToken = data.authToken
                    this.refreshToken = data.refreshToken

                    return of(null)
                }),
            )
    }

    /**
     * Checks and watches the current auth state of the user in localstorage.
     *
     * @returns {boolean}
     */
    public isAuthenticated(): boolean {
        const emptyUserId = !this.userId || this.userId === ''
        const emptyAuthToken = !this.authToken || this.authToken === ''

        // validate user data and tokens
        if (emptyUserId || emptyAuthToken) {
            return false
        }

        return true
    }
}
