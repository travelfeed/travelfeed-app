import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
import { environment } from '../../../environments/environment'

@Injectable()
export class AuthService {
    private readonly baseUri: string = environment.apiBaseUrl

    public constructor(private http: HttpClient) {}

    public signin(username: string, password: string) {
        return this.http.post(`${this.baseUri}/auth/signin`, {
            username: username,
            password: password
        })
    }

    public signout() {}

    public isSignedIn(): Observable<boolean> {
        return of(false)
    }
}
