import { Component, AfterViewInit, OnDestroy, Input } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { takeWhile } from 'rxjs/operators'
import { NotificationService } from '../../../../shared/notification/notification.service'
import { TranslationsService } from '../translations.service'
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
        private notificationService: NotificationService,
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
        const key = update.key.key

        this.loading = true
        this.translationsService
            .save(update)
            .pipe(takeWhile(() => this.alive))
            .subscribe(
                () => this.notificationService.success(`Successfully saved value for "${key}"`),
                () => this.notificationService.error(`Failed to save value for "${key}"`),
                () => {
                    this.loading = false
                    this.changed = false
                },
            )
    }

    public delete(): void {
        const key = this.translation.key.key

        this.loading = true
        this.translationsService
            .delete(this.translation)
            .pipe(takeWhile(() => this.alive))
            .subscribe(
                () => this.notificationService.success(`Successfully deleted "${key}"`),
                () => this.notificationService.error(`Failed to delete "${key}"`),
                () => {
                    this.loading = false
                },
            )
    }
}
