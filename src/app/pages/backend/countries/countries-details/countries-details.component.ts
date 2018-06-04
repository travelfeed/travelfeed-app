import { Component, OnInit, OnChanges, OnDestroy, Input, SimpleChanges } from '@angular/core'
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms'
import { Store } from '@ngrx/store'
import { takeWhile } from 'rxjs/operators'
import {
    Country,
    CountriesState,
    CountriesAction,
    CountriesActionTypes,
} from '../../../../store/countries'

@Component({
    selector: 'cmp-countries-details',
    templateUrl: './countries-details.component.html',
    styleUrls: ['./countries-details.component.scss'],
})
export class CountriesDetailsComponent implements OnInit, OnChanges, OnDestroy {
    @Input() public country: Country

    public countryForm: FormGroup

    private alive: boolean = true

    public constructor(private formBuilder: FormBuilder, private store: Store<CountriesState>) {}

    public ngOnInit(): void {
        this.countryForm = this.formBuilder.group({
            name: this.country.name,
            code: this.country.code,
        })

        this.countryForm.valueChanges.pipe(takeWhile(() => this.alive)).subscribe(values => {
            this.country = { ...this.country, ...values }
        })
    }

    public ngOnChanges(changes: SimpleChanges): void {
        const { firstChange, currentValue } = changes.country

        if (firstChange) {
            return
        }

        this.countryForm.setValue({
            name: currentValue.name,
            code: currentValue.code,
        })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }

    public get name(): AbstractControl {
        return this.countryForm.get('name')
    }

    public get code(): AbstractControl {
        return this.countryForm.get('code')
    }

    public save(): void {
        this.store.dispatch<CountriesAction>({
            type: CountriesActionTypes.SAVE_COUNTRY,
            payload: this.country,
        })
    }

    public delete(): void {
        this.store.dispatch<CountriesAction>({
            type: CountriesActionTypes.DELETE_COUNTRY,
            payload: this.country,
        })
    }
}
