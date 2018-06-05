import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { takeWhile, filter } from 'rxjs/operators'
import { AppState } from '../../../store'
import { CountriesState, CountriesAction, CountriesActionTypes } from '../../../store/countries'

@Component({
    selector: 'cmp-countries',
    templateUrl: './countries.component.html',
    styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit, OnDestroy {
    public state$: Observable<CountriesState> = this.store.pipe(select('countries'))

    private alive: boolean = true

    public constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

    public ngOnInit(): void {
        this.store.dispatch<CountriesAction>({
            type: CountriesActionTypes.LOAD_COUNTRIES,
            payload: parseInt(this.route.snapshot.paramMap.get('id') || null, 10),
        })

        this.route.paramMap
            .pipe(takeWhile(() => this.alive), filter((params: ParamMap) => params.has('id')))
            .subscribe(params => {
                this.store.dispatch<CountriesAction>({
                    type: CountriesActionTypes.SELECT_COUNTRY,
                    payload: parseInt(params.get('id'), 10),
                })
            })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
