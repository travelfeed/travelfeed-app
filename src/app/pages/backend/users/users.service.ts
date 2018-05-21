import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { map } from 'rxjs/operators'
import { environment } from '../../../../environments/environment'
import { ApiResponse } from '../../../shared/typings'
import { User } from '../../../store/users/user.model'

@Injectable()
export class UsersService {
    private readonly baseUri: string = environment.apiBaseUrl

    public constructor(private http: HttpClient) {}

    public fetchUsers(): Observable<Array<User>> {
        return this.http.get<ApiResponse>(`${this.baseUri}/user`).pipe(
            map((response: ApiResponse) => {
                return response.data as Array<User>
            }),
        )
    }
}
