import { Component, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import {
    Country,
    CountriesState,
    CountriesAction,
    CountriesActionTypes,
} from '../../../../store/countries'

@Component({
    selector: 'cmp-countries-item',
    templateUrl: './countries-item.component.html',
    styleUrls: ['./countries-item.component.scss'],
})
export class CountriesItemComponent {
    @Input() public country: Country

    public constructor(private store: Store<CountriesState>) {}

    public delete(event: Event): void {
        event.stopPropagation()

        this.store.dispatch<CountriesAction>({
            type: CountriesActionTypes.DELETE_COUNTRY,
            payload: this.country,
        })
    }
}
