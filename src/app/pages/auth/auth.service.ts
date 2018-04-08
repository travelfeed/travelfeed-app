import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { switchMap } from 'rxjs/operators'
import { of } from 'rxjs/observable/of'
import { environment } from '../../../environments/environment'
import { ApiResponse, User } from './typings'

@Injectable()
export class AuthService {
    private readonly baseUri: string = environment.apiBaseUrl

    public constructor(private http: HttpClient) {}

    public get userId(): string {
        return localStorage.getItem('userId')
    }

    public set userId(value: string) {
        localStorage.setItem('userId', value)
    }

    public get authToken(): string {
        return localStorage.getItem('authToken')
    }

    public set authToken(value: string) {
        localStorage.setItem('authToken', value)
    }

    /**
     * Signs the given user in with the given data and returns the user data.
     *
     * @param {string} email
     * @param {string} password
     * @returns {Observable<User>}
     */
    public signin(email: string, password: string): Observable<User> {
        console.log('==> AuthService::signin')

        this.userId = ''
        this.authToken = ''

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

    /**
     * Signs the user out of the application.
     *
     * @returns {Observable<ApiResponse>}
     */
    public signout(): Observable<ApiResponse> {
        console.log('==> AuthService::signout')

        this.userId = ''
        this.authToken = ''

        return of(null)
        // return this.http.post<ApiResponse>(`${this.baseUri}/auth/signout`, null)
    }

    /**
     * Registers the user with the given data.
     *
     * @param {string} username
     * @param {string} password
     * @param {stirng} email
     * @returns {Observable<ApiResponse>}
     */
    public register(username: string, password: string, email: string): Observable<ApiResponse> {
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

    /**
     * Checks and watches the current auth state of the user in localstorage.
     *
     * @returns {boolean}
     */
    public isSignedIn(): boolean {
        const validAuthToken: boolean = this.authToken !== null && this.authToken !== ''
        const validUserId: boolean = this.userId !== null && this.userId !== ''

        return validAuthToken && validUserId
    }
}
