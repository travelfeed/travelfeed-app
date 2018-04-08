import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { switchMap, map, filter } from 'rxjs/operators'
import { of } from 'rxjs/observable/of'
import { fromEvent } from 'rxjs/observable/fromEvent'
import { LocalStorage } from 'ngx-store'
import { environment } from '../../../environments/environment'
import { ApiResponse, User } from './typings'

@Injectable()
export class AuthService {
    @LocalStorage() public userId: string

    @LocalStorage() public authToken: string

    private readonly baseUri: string = environment.apiBaseUrl

    public constructor(private http: HttpClient) {}

    /**
     * Signs the given user in with the given data and returns the user data.
     *
     * @param {string} email
     * @param {string} password
     * @returns {Observable<User>}
     */
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

    /**
     * Signs the user out of the application.
     *
     * @returns {Observable<ApiResponse>}
     */
    public signout(): Observable<ApiResponse> {
        console.log('==> AuthService::signout')
        return this.http.post<ApiResponse>(`${this.baseUri}/auth/signout`, null).pipe(
            map(({ status, data }: ApiResponse) => {
                this.userId = null
                this.authToken = null

                return null
            })
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
     * @returns {Observable<boolean>}
     */
    public isSignedIn(): Observable<boolean> {
        return new BehaviorSubject(this.authToken !== null && this.userId !== null).pipe(
            switchMap(() => fromEvent(window, 'storage')),
            filter(({ key }: StorageEvent) => key === 'authToken' || key === 'userId'),
            map(() => this.authToken !== null && this.userId !== null)
        )
    }
}
