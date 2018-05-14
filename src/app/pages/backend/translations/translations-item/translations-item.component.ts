import { Component, AfterViewInit, OnDestroy, Input } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { takeWhile, map } from 'rxjs/operators'
import { TranslationsService } from '../translations.service'
import { ApiResponse } from '../../../../shared/typings'
import { Translation } from '../typings'

@Component({
    selector: 'cmp-translations-item',
    templateUrl: './translations-item.component.html',
    styleUrls: ['./translations-item.component.scss'],
})
export class TranslationsItemComponent implements AfterViewInit, OnDestroy {
    @Input() public translation: Translation

    public translationForm: FormGroup

    public model: string = null

    public loading: boolean = false

    public changed: boolean = false

    private alive: boolean = true

    public constructor(
        private formBuilder: FormBuilder,
        private translationsService: TranslationsService,
    ) {
        this.translationForm = this.formBuilder.group({
            input: [null, []],
        })
        this.translationForm.valueChanges.pipe(takeWhile(() => this.alive)).subscribe(() => {
            this.changed = this.translationForm.dirty
        })
    }

    public ngAfterViewInit(): void {
        this.translationForm.setValue({
            input: this.translation.value,
        })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }

    public get input() {
        return this.translationForm.get('input')
    }

    public save(): void {
        const value = this.translationForm.value.input
        const update: Translation = { ...this.translation, value }

        this.loading = true
        this.translationsService
            .save(update)
            .pipe(takeWhile(() => this.alive))
            .subscribe(() => {
                this.loading = false
            })
    }

    public delete(): void {
        this.loading = true
        this.translationsService
            .delete(this.translation)
            .pipe(takeWhile(() => this.alive))
            .subscribe(() => {
                this.loading = false
            })
    }
}
