import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Country } from '../../store/countries'
import { CountriesService } from '../backend/countries/countries.service'

@Component({
    selector: 'cmp-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
    public countries$: Observable<Array<Country>>

    public constructor(private countriesService: CountriesService) {}

    public ngOnInit() {
        this.countries$ = this.countriesService.fetchCount().pipe(map(response => response.data))
    }
}
