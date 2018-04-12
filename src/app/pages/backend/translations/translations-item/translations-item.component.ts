import { Component, OnDestroy, Input, Output, EventEmitter } from '@angular/core'
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
export class TranslationsItemComponent implements OnDestroy {
    @Input() public translation: Translation

    @Output() public translationChange: EventEmitter<Translation> = new EventEmitter()

    public translationForm: FormGroup

    public model: string = null

    private alive: boolean = true

    public constructor(
        private formBuilder: FormBuilder,
        private translationsService: TranslationsService
    ) {
        this.translationForm = this.formBuilder.group({
            input: [null, [Validators.required, Validators.email]]
        })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }

    public get input() {
        return this.translationForm.get('input')
    }

    public save(): void {
        const { translation } = this.translationForm.value

        this.translationsService
            .save(translation)
            .pipe(takeWhile(() => this.alive))
            .subscribe(() => {})
    }
}
