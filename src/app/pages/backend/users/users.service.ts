import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Observable } from 'rxjs/Observable'
import { switchMap, map } from 'rxjs/operators'
import { environment } from '../../../../environments/environment'
import { ApiResponse } from '../../../shared/typings'
import { User } from './typings'

@Injectable()
export class UsersService {
    public users$: BehaviorSubject<Array<User>> = new BehaviorSubject([])

    public selected$: BehaviorSubject<User> = new BehaviorSubject(null)

    private readonly baseUri: string = environment.apiBaseUrl

    public constructor(private http: HttpClient) {}

    public fetchUsers(): Observable<Array<User>> {
        return this.http.get<ApiResponse>(`${this.baseUri}/user`).pipe(
            map((response: ApiResponse) => {
                return response.data as Array<User>
            }),
        )
    }

    public fetchUser(userId: number): Observable<User> {
        return this.http.get<ApiResponse>(`${this.baseUri}/user/${userId}`).pipe(
            map((response: ApiResponse) => {
                return response.data as User
            }),
        )
    }
}
