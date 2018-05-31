import { Component, OnInit, OnDestroy } from '@angular/core'
import { AbstractControl, FormControl } from '@angular/forms'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { takeWhile } from 'rxjs/operators'
import { AppState } from '../../../../store'
import {
    TranslationsState,
    TranslationsAction,
    TranslationsActionTypes,
} from '../../../../store/translations'
import { Language, LanguagesState } from '../../../../store/languages'
import { FSelectOption, FSelectPlaceholder } from '../../../../components/form-elements/typings'

@Component({
    selector: 'cmp-translations-overview',
    templateUrl: './translations-overview.component.html',
    styleUrls: ['./translations-overview.component.scss'],
})
export class TranslationsOverviewComponent implements OnInit, OnDestroy {
    public state$: Observable<TranslationsState> = this.store.pipe(select('translations'))

    public languages$: Observable<LanguagesState> = this.store.pipe(select('languages'))

    public select: AbstractControl = new FormControl()

    public options: Array<FSelectOption> = []

    public placeholder: FSelectPlaceholder = {
        label: 'Please select',
        selectable: false,
        value: null,
    }

    private alive: boolean = true

    public constructor(private store: Store<AppState>) {}

    public ngOnInit(): void {
        this.languages$.pipe(takeWhile(() => this.alive)).subscribe((state: LanguagesState) => {
            this.options = state.items.map((item): FSelectOption => ({
                label: item.name,
                value: item,
            }))
        })

        this.select.valueChanges.pipe(takeWhile(() => this.alive)).subscribe((value: Language) => {
            this.store.dispatch<TranslationsAction>({
                type: TranslationsActionTypes.SELECT_LANGUAGE,
                payload: value,
            })
        })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
