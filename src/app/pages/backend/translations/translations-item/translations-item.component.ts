import { Component, AfterViewInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Translation } from '../typings'
import { TranslationsService } from '../translations.service'
import { takeWhile, map } from 'rxjs/operators'
import { ApiResponse } from '../../../../shared/typings'

@Component({
    selector: 'cmp-translations-item',
    templateUrl: './translations-item.component.html',
    styleUrls: ['./translations-item.component.scss']
})
export class TranslationsItemComponent implements AfterViewInit, OnDestroy {
    @Input() public translation: Translation

    @Output() public translationChange: EventEmitter<Translation> = new EventEmitter()

    public translationForm: FormGroup

    public model: string = null

    public saving: boolean = false

    private alive: boolean = true

    public constructor(
        private formBuilder: FormBuilder,
        private translationsService: TranslationsService
    ) {
        this.translationForm = this.formBuilder.group({
            input: [null, []]
        })
    }

    public ngAfterViewInit(): void {
        setTimeout(() => {
            this.translationForm.setValue({
                input: this.translation.value
            })
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

        this.saving = true
        this.translationsService
            .save(update)
            .pipe(takeWhile(() => this.alive))
            .subscribe(() => {
                this.saving = false
            })
    }
}
