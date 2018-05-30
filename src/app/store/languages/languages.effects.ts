import { Injectable } from '@angular/core'
import { Actions, Effect } from '@ngrx/effects'
import { TranslateService } from '@ngx-translate/core'
import { of } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
import { fromActionType } from '../helpers'
import { NotificationService } from '../../shared/notification/notification.service'
import { LanguagesService } from '../../shared/languages/languages.service'
import {
    LanguagesActionTypes,
    LoadLanguagesSuccess,
    LoadLanguagesFail,
    SelectLanguage,
} from './languages.action'

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

    @Effect({ dispatch: false })
    public selectLanguage$ = this.actions$.pipe(
        fromActionType(LanguagesActionTypes.SELECT_LANGUAGE, (action: SelectLanguage) => {
            return this.translateService.use(action.payload)
        }),
    )

    public constructor(
        private actions$: Actions,
        private translateService: TranslateService,
        private notificationService: NotificationService,
        private languagesService: LanguagesService,
    ) {}
}
