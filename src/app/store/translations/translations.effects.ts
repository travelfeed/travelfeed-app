import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Store, select } from '@ngrx/store'
import { Actions, Effect } from '@ngrx/effects'
import { of, Observable } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
import { fromActionType } from '../helpers'
import { AppState } from '..'
import { NotificationService } from '../../shared/notification/notification.service'
import { TranslationsService } from '../../pages/backend/translations/translations.service'
import { TranslationsState } from './translations.reducer'
import {
    TranslationsActionTypes,
    SelectLanguage,
    LoadTranslations,
    LoadTranslationsSuccess,
    LoadTranslationsFail,
    SaveTranslation,
    SaveTranslationSuccess,
    SaveTranslationFail,
    DeleteTranslation,
    DeleteTranslationSuccess,
    DeleteTranslationFail,
    CreateTranslationKey,
    CreateTranslationKeySuccess,
    CreateTranslationKeyFail,
} from './translations.action'

@Injectable()
export class TranslationsEffects {
    @Effect()
    public selectLanguage$ = this.actions$.pipe(
        fromActionType(TranslationsActionTypes.SELECT_LANGUAGE, (action: SelectLanguage) => {
            return of(new LoadTranslations(action.payload))
        }),
    )

    @Effect()
    public getTranslations$ = this.actions$.pipe(
        fromActionType(TranslationsActionTypes.LOAD_TRANSLATIONS, (action: LoadTranslations) => {
            return this.translationsService.fetchTranslations(action.payload).pipe(
                map(response => {
                    return new LoadTranslationsSuccess(response.data)
                }),
                catchError(error => {
                    this.notificationService.error('Error while loading translations!')
                    return of(new LoadTranslationsFail(error))
                }),
            )
        }),
    )

    @Effect()
    public saveTranslation$ = this.actions$.pipe(
        fromActionType(TranslationsActionTypes.SAVE_TRANSLATION, (action: SaveTranslation) => {
            return this.translationsService.save(action.payload).pipe(
                map(() => {
                    this.notificationService.success('Translation successfully saved!')
                    return new SaveTranslationSuccess(action.payload)
                }),
                catchError(error => {
                    this.notificationService.error('Error while saving translation!')
                    return of(new SaveTranslationFail(error))
                }),
            )
        }),
    )

    @Effect()
    public deleteTranslation$ = this.actions$.pipe(
        fromActionType(TranslationsActionTypes.DELETE_TRANSLATION, (action: DeleteTranslation) => {
            return this.translationsService.delete(action.payload).pipe(
                map(() => {
                    this.notificationService.success('Translation successfully deleted!')
                    return new DeleteTranslationSuccess(action.payload)
                }),
                catchError(error => {
                    this.notificationService.error('Error while deleting translation!')
                    return of(new DeleteTranslationFail(error))
                }),
            )
        }),
    )

    @Effect({ dispatch: false })
    public deleteTranslationSuccess$ = this.actions$.pipe(
        fromActionType(TranslationsActionTypes.DELETE_TRANSLATION_SUCCESS, () => {
            return new Observable(observer => {
                this.router
                    .navigate(['/backend/translations'])
                    .then(() => observer.complete())
                    .catch(error => observer.error(error))
            })
        }),
    )

    @Effect()
    public createTranslationsKey$ = this.actions$.pipe(
        fromActionType(
            TranslationsActionTypes.CREATE_TRANSLATION_KEY,
            (action: CreateTranslationKey) => {
                return this.translationsService.createKey(action.payload).pipe(
                    map(() => {
                        this.notificationService.success('Translation key successfully created!')
                        return new CreateTranslationKeySuccess()
                    }),
                    catchError(error => {
                        this.notificationService.error('Error while creating translation key!')
                        return of(new CreateTranslationKeyFail(error))
                    }),
                )
            },
        ),
    )

    @Effect()
    public createTranslationKeySuccess$ = this.actions$.pipe(
        fromActionType<TranslationsState>(
            TranslationsActionTypes.CREATE_TRANSLATION_KEY_SUCCESS,
            this.store$.pipe(select('translations')),
            ([, state]) => {
                console.log(state.language)
                return of(new LoadTranslations(state.language))
            },
        ),
    )

    public constructor(
        private router: Router,
        private store$: Store<AppState>,
        private actions$: Actions,
        private notificationService: NotificationService,
        private translationsService: TranslationsService,
    ) {}
}
