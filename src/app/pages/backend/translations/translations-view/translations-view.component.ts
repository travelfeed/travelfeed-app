import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { AppState } from '../../../../store'
import { TranslationsState } from '../../../../store/translations/translations.reducer'
import { TranslationsAction, TranslationsActionTypes } from '../../../../store/translations'

@Component({
    selector: 'cmp-translations-view',
    templateUrl: './translations-view.component.html',
    styleUrls: ['./translations-view.component.scss'],
})
export class TranslationsViewComponent {
    public state$: Observable<TranslationsState> = this.store.pipe(select('translations'))

    public key: FormControl = new FormControl()

    public constructor(private store: Store<AppState>) {}

    public create(): void {
        const { value } = this.key

        this.key.reset()

        this.store.dispatch<TranslationsAction>({
            type: TranslationsActionTypes.CREATE_TRANSLATION_KEY,
            payload: value,
        })
    }
}
