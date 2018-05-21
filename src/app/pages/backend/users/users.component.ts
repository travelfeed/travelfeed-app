import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { takeWhile, filter } from 'rxjs/operators'
import { UsersState } from '../../../store/users/users.reducer'
import { UsersAction, UsersActionTypes } from '../../../store/users/users.action'

@Component({
    selector: 'cmp-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
    public state$: Observable<UsersState> = this.store.pipe(select('users'))

    private alive: boolean = true

    public constructor(private store: Store<UsersState>, private route: ActivatedRoute) {}

    public ngOnInit(): void {
        this.store.dispatch<UsersAction>({
            type: UsersActionTypes.LOAD_USERS,
            payload: parseInt(this.route.snapshot.paramMap.get('id') || null, 10),
        })

        this.route.paramMap
            .pipe(takeWhile(() => this.alive), filter((params: ParamMap) => params.has('id')))
            .subscribe(params => {
                this.store.dispatch<UsersAction>({
                    type: UsersActionTypes.SELECT_USER,
                    payload: parseInt(params.get('id'), 10),
                })
            })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
