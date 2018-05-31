import { Component, OnInit, OnDestroy, Input } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { takeWhile } from 'rxjs/operators'
import { AppState } from '../../../../store'
import {
    Translation,
    TranslationsState,
    TranslationsAction,
    TranslationsActionTypes,
} from '../../../../store/translations'

@Component({
    selector: 'cmp-translations-item',
    templateUrl: './translations-item.component.html',
    styleUrls: ['./translations-item.component.scss'],
})
export class TranslationsItemComponent implements OnInit, OnDestroy {
    @Input() public translation: Translation

    public state$: Observable<TranslationsState> = this.store.pipe(select('translations'))

    public input: FormControl = new FormControl()

    public changed: boolean = false

    private alive: boolean = true

    public constructor(private store: Store<AppState>) {}

    public ngOnInit(): void {
        this.input.setValue(this.translation.value)

        this.input.valueChanges.pipe(takeWhile(() => this.alive)).subscribe(() => {
            this.changed = this.input.dirty
        })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }

    public save(): void {
        const { value } = this.input

        this.changed = false

        this.store.dispatch<TranslationsAction>({
            type: TranslationsActionTypes.SAVE_TRANSLATION,
            payload: { ...this.translation, value },
        })
    }

    public delete(): void {
        this.store.dispatch<TranslationsAction>({
            type: TranslationsActionTypes.DELETE_TRANSLATION,
            payload: this.translation,
        })
    }
}
