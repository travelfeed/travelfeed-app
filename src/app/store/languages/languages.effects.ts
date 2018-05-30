import { Injectable } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Actions, Effect } from '@ngrx/effects'
import { TranslateService } from '@ngx-translate/core'
import { of } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
import { fromActionType } from '../helpers'
import { AppState } from '..'
import { NotificationService } from '../../shared/notification/notification.service'
import { LanguagesService } from '../../shared/languages/languages.service'
import { LanguagesState } from './languages.reducer'
import { LanguagesActionTypes, LoadLanguagesSuccess, LoadLanguagesFail } from './languages.action'

@Injectable()
export class LanguagesEffects {
    @Effect()
    public getLanguages$ = this.actions$.pipe(
        fromActionType(LanguagesActionTypes.LOAD_LANGUAGES, () => {
            return this.languagesService.fetchLanguages().pipe(
                map(response => {
                    return new LoadLanguagesSuccess(response.data)
                }),
                catchError(error => {
                    this.notificationService.error('Error while loading languages!')
                    return of(new LoadLanguagesFail(error))
                }),
            )
        }),
    )

    @Effect()
    public refreshLanguage$ = this.actions$.pipe(
        fromActionType<LanguagesState>(
            LanguagesActionTypes.REFRESH_LANGUAGE,
            this.store$.pipe(select('languages')),
            ([, state]) => {
                this.translateService.resetLang(state.selected.id)
                this.translateService.use(state.selected.id)
                return of(null)
            },
        ),
    )

    public constructor(
        private store$: Store<AppState>,
        private actions$: Actions,
        private translateService: TranslateService,
        private notificationService: NotificationService,
        private languagesService: LanguagesService,
    ) {}
}
