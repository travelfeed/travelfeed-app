import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { LocalStorage } from 'ngx-store'
import { environment } from '../../../environments/environment'
import { ApiResponse } from '../../shared/typings'

@Injectable()
export class AuthService {
    @LocalStorage() public userId: number = null

    @LocalStorage() public userRole: string = null

    @LocalStorage() public authToken: string = null

    @LocalStorage() public refreshToken: string = null

    private readonly baseUri: string = environment.apiBaseUrl

    public constructor(private http: HttpClient) {}

    /**
     * Signs the given user in with the given data and returns the user data.
     *
     * @param {string} email
     * @param {string} password
     * @returns {Observable<void>}
     */
    public signin(email: string, password: string): Observable<ApiResponse<any>> {
        this.userId = null
        this.authToken = null
        this.refreshToken = null

        return this.http
            .post<ApiResponse<any>>(`${this.baseUri}/auth/signin`, {
                email: email,
                password: password,
            })
            .pipe(
                map((response: ApiResponse<any>) => {
                    this.userId = response.data.userId
                    this.userRole = response.data.userRole
                    this.authToken = response.data.authToken
                    this.refreshToken = response.data.refreshToken

                    return response
                }),
            )
    }

    /**
     * Signs the user out of the application.
     *
     * @returns {Observable<ApiResponse<void>>}
     */
    public signout(): Observable<ApiResponse<void>> {
        this.userId = null
        this.userRole = null
        this.authToken = null
        this.refreshToken = null

        return this.http.post<ApiResponse<void>>(`${this.baseUri}/auth/signout`, null)
    }

    /**
     * Tries to refresh the user auth session using the stored refresh token.
     *
     * @returns {Observable<void>}
     */
    public refresh(): Observable<void> {
        return this.http
            .post<ApiResponse<any>>(`${this.baseUri}/auth/refresh`, {
                userId: this.userId,
                refreshToken: this.refreshToken,
            })
            .pipe(
                map((response: ApiResponse<any>) => {
                    this.authToken = response.data.authToken
                    this.refreshToken = response.data.refreshToken
                }),
            )
    }

    /**
     * Registers the user with the given data.
     *
     * @param {string} username
     * @param {string} password
     * @param {stirng} email
     * @returns {Observable<void>}
     */
    public register(username: string, email: string, password: string): Observable<void> {
        return this.http
            .post<ApiResponse<any>>(`${this.baseUri}/auth/register`, {
                username: username,
                email: email,
                password: password,
            })
            .pipe(
                map((response: ApiResponse<any>) => {
                    this.userId = response.data.userId
                    this.userRole = response.data.userRole
                    this.authToken = response.data.authToken
                    this.refreshToken = response.data.refreshToken
                }),
            )
    }

    /**
     * Checks and watches the current auth state of the user in localstorage.
     *
     * @returns {boolean}
     */
    public isAuthenticated(): boolean {
        const emptyUserId = !this.userId || this.userId === null
        const emptyAuthToken = !this.authToken || this.authToken === null

        // validate user data and tokens
        if (emptyUserId || emptyAuthToken) {
            return false
        }

        return true
    }

    public isAdmin(): boolean {
        return this.userRole === 'admin'
    }
}
