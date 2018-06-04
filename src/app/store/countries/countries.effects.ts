import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, Effect } from '@ngrx/effects'
import { of, Observable } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
import { NotificationService } from '../../shared/notification/notification.service'
import { CountriesService } from '../../pages/backend/countries/countries.service'
import {
    CountriesActionTypes,
    LoadCountries,
    LoadCountriesSuccess,
    LoadCountriesFail,
    SaveCountry,
    SaveCountrySuccess,
    SaveCountryFail,
    DeleteCountry,
    DeleteCountrySuccess,
    DeleteCountryFail,
    CreateCountry,
    CreateCountrySuccess,
    CreateCountryFail,
} from './countries.action'
import { fromActionType } from '../helpers'

@Injectable()
export class CountriesEffects {
    @Effect()
    public getCountries$ = this.actions$.pipe(
        fromActionType(CountriesActionTypes.LOAD_COUNTRIES, (action: LoadCountries) => {
            return this.countriesService.fetchCountries().pipe(
                map(response => {
                    return new LoadCountriesSuccess({
                        items: response.data,
                        selected: action.payload,
                    })
                }),
                catchError(error => {
                    this.notificationService.error('Error while loading countries!')
                    return of(new LoadCountriesFail(error))
                }),
            )
        }),
    )

    @Effect()
    public createCountry$ = this.actions$.pipe(
        fromActionType(CountriesActionTypes.CREATE_COUNTRY, (action: CreateCountry) => {
            return this.countriesService.create({ name: action.payload }).pipe(
                map(response => {
                    this.notificationService.success('Country successfully created!')
                    return new CreateCountrySuccess(response.data)
                }),
                catchError(error => {
                    this.notificationService.error('Error while creating new country!')
                    return of(new CreateCountryFail(error))
                }),
            )
        }),
    )

    @Effect()
    public saveCountry$ = this.actions$.pipe(
        fromActionType(CountriesActionTypes.SAVE_COUNTRY, (action: SaveCountry) => {
            return this.countriesService.save(action.payload).pipe(
                map(() => {
                    this.notificationService.success('Country successfully saved!')
                    return new SaveCountrySuccess(action.payload)
                }),
                catchError(error => {
                    this.notificationService.error('Error while saving country!')
                    return of(new SaveCountryFail(error))
                }),
            )
        }),
    )

    @Effect()
    public deleteCountry$ = this.actions$.pipe(
        fromActionType(CountriesActionTypes.DELETE_COUNTRY, (action: DeleteCountry) => {
            return this.countriesService.delete(action.payload).pipe(
                map(() => {
                    this.notificationService.success('Country successfully deleted!')
                    return new DeleteCountrySuccess(action.payload)
                }),
                catchError(error => {
                    this.notificationService.error('Error while deleting country!')
                    return of(new DeleteCountryFail(error))
                }),
            )
        }),
    )

    @Effect({ dispatch: false })
    public deleteCountrySuccess$ = this.actions$.pipe(
        fromActionType(CountriesActionTypes.DELETE_COUNTRY_SUCCESS, () => {
            return new Observable(observer => {
                this.router
                    .navigate(['/backend/countries'])
                    .then(() => observer.complete())
                    .catch(error => observer.error(error))
            })
        }),
    )

    public constructor(
        private router: Router,
        private actions$: Actions,
        private notificationService: NotificationService,
        private countriesService: CountriesService,
    ) {}
}
