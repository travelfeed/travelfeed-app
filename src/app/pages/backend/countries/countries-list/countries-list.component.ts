import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { Router } from '@angular/router'
import { FormControl } from '@angular/forms'
import { Store } from '@ngrx/store'
import {
    Country,
    CountriesState,
    CountriesAction,
    CountriesActionTypes,
} from '../../../../store/countries'

@Component({
    selector: 'cmp-countries-list',
    templateUrl: './countries-list.component.html',
    styleUrls: ['./countries-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountriesListComponent {
    @Input() public countries: Array<Country>

    public createMode: boolean = false

    public title: FormControl = new FormControl('')

    public constructor(private router: Router, private store: Store<CountriesState>) {}

    public select(country: Country): void {
        this.router.navigate(['/backend/countries/', country.id])
    }

    public toggle(): void {
        if (this.createMode) {
            this.title.reset('')
        }

        this.createMode = !this.createMode
    }

    public create(): void {
        this.store.dispatch<CountriesAction>({
            type: CountriesActionTypes.CREATE_COUNTRY,
            payload: this.title.value,
        })

        this.toggle()
    }
}
