import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { CountryService, Country } from './country.service'

@Component({
    selector: 'cmp-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
    public countries$: Observable<Array<Country>>

    public constructor(private countryService: CountryService) {}

    public ngOnInit() {
        this.countries$ = this.countryService.fetchAll()
    }
}
