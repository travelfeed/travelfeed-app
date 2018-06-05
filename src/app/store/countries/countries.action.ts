import { Action } from '@ngrx/store'
import { Country } from './country.model'

// tslint:disable:max-classes-per-file

export enum CountriesActionTypes {
    LOAD_COUNTRIES = '[Countries] Load countries',
    LOAD_COUNTRIES_SUCCESS = '[Countries] Load countries success',
    LOAD_COUNTRIES_FAIL = '[Countries] Load countries fail',
    CREATE_COUNTRY = '[Countries] Create country',
    CREATE_COUNTRY_SUCCESS = '[Countries] Create country success',
    CREATE_COUNTRY_FAIL = '[Countries] Create country fail',
    SELECT_COUNTRY = '[Countries] Select country',
    SAVE_COUNTRY = '[Countries] Save country',
    SAVE_COUNTRY_SUCCESS = '[Countries] Save country success',
    SAVE_COUNTRY_FAIL = '[Countries] Save country fail',
    DELETE_COUNTRY = '[Countries] Delete country',
    DELETE_COUNTRY_SUCCESS = '[Countries] Delete country success',
    DELETE_COUNTRY_FAIL = '[Countries] Delete country fail',
    PUBLISH_COUNTRY = '[Countries] Publish country',
    PUBLISH_COUNTRY_SUCCESS = '[Countries] Publish country success',
    PUBLISH_COUNTRY_FAIL = '[Countries] Publish country fail',
    UNPUBLISH_COUNTRY = '[Countries] Unpublish country',
    UNPUBLISH_COUNTRY_SUCCESS = '[Countries] Unpublish country success',
    UNPUBLISH_COUNTRY_FAIL = '[Countries] Unpublish country fail',
}

/**
 * Load countries
 */
export class LoadCountries implements Action {
    public readonly type = CountriesActionTypes.LOAD_COUNTRIES
    public constructor(public payload: number) {}
}

export class LoadCountriesSuccess implements Action {
    public readonly type = CountriesActionTypes.LOAD_COUNTRIES_SUCCESS
    public constructor(public payload: { items: Array<Country>; selected: number }) {}
}

export class LoadCountriesFail implements Action {
    public readonly type = CountriesActionTypes.LOAD_COUNTRIES_FAIL
    public constructor(public payload: Error) {}
}

export type LoadCountriesAction = LoadCountries | LoadCountriesSuccess | LoadCountriesFail

/**
 * Select country
 */
export class SelectCountry implements Action {
    public readonly type = CountriesActionTypes.SELECT_COUNTRY
    public constructor(public payload: number) {}
}

export type SelectCountryAction = SelectCountry

/**
 * Create country
 */
export class CreateCountry implements Action {
    public readonly type = CountriesActionTypes.CREATE_COUNTRY
    public constructor(public payload: string) {}
}

export class CreateCountrySuccess implements Action {
    public readonly type = CountriesActionTypes.CREATE_COUNTRY_SUCCESS
    public constructor(public payload: Country) {}
}

export class CreateCountryFail implements Action {
    public readonly type = CountriesActionTypes.CREATE_COUNTRY_FAIL
    public constructor(public payload: Error) {}
}

export type CreateCountryAction = CreateCountry | CreateCountrySuccess | CreateCountryFail

/**
 * Save country
 */
export class SaveCountry implements Action {
    public readonly type = CountriesActionTypes.SAVE_COUNTRY
    public constructor(public payload: Country) {}
}

export class SaveCountrySuccess implements Action {
    public readonly type = CountriesActionTypes.SAVE_COUNTRY_SUCCESS
    public constructor(public payload: Country) {}
}

export class SaveCountryFail implements Action {
    public readonly type = CountriesActionTypes.SAVE_COUNTRY_FAIL
    public constructor(public payload: Error) {}
}

export type SaveCountryAction = SaveCountry | SaveCountrySuccess | SaveCountryFail

/**
 * Delete country
 */
export class DeleteCountry implements Action {
    public readonly type = CountriesActionTypes.DELETE_COUNTRY
    public constructor(public payload: Country) {}
}

export class DeleteCountrySuccess implements Action {
    public readonly type = CountriesActionTypes.DELETE_COUNTRY_SUCCESS
    public constructor(public payload: Country) {}
}

export class DeleteCountryFail implements Action {
    public readonly type = CountriesActionTypes.DELETE_COUNTRY_FAIL
    public constructor(public payload: Error) {}
}

export type DeleteCountryAction = DeleteCountry | DeleteCountrySuccess | DeleteCountryFail

/**
 * All actions
 */
export type CountriesAction =
    | LoadCountriesAction
    | CreateCountryAction
    | SelectCountryAction
    | SaveCountryAction
    | DeleteCountryAction
