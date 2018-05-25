import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { environment } from '../../../../environments/environment'
import { ApiResponse } from '../../../shared/typings'
import { User } from '../../../store/users/user.model'

@Injectable()
export class UsersService {
    private readonly baseUri: string = environment.apiBaseUrl

    public constructor(private http: HttpClient) {}

    public fetchUsers(): Observable<ApiResponse<Array<User>>> {
        return this.http.get<ApiResponse<Array<User>>>(`${this.baseUri}/user`)
    }
}
