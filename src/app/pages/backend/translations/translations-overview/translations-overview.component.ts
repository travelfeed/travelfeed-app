import { Component, OnInit, OnDestroy } from '@angular/core'
import { AbstractControl, FormControl } from '@angular/forms'
import { takeWhile, map } from 'rxjs/operators'
import { TranslationsService } from '../translations.service'
import { ApiResponse } from '../../../../shared/typings'
import { FSelectOption, FSelectPlaceholder } from '../../../../components/form-elements/typings'
import { TranslationLanguage } from '../typings'

@Component({
    selector: 'cmp-translations-overview',
    templateUrl: './translations-overview.component.html',
    styleUrls: ['./translations-overview.component.scss']
})
export class TranslationsOverviewComponent implements OnInit, OnDestroy {
    public select: AbstractControl = new FormControl()

    public options: Array<FSelectOption> = []

    public placeholder: FSelectPlaceholder = {
        label: 'Please select',
        selectable: false,
        value: null
    }

    private alive: boolean = true

    public constructor(private translationsService: TranslationsService) {}

    public ngOnInit(): void {
        this.translationsService
            .fetchLanguages()
            .pipe(
                takeWhile(() => this.alive),
                map((response: ApiResponse) => {
                    return response.data.map((item: TranslationLanguage): FSelectOption => ({
                        label: item.name,
                        value: item
                    }))
                })
            )
            .subscribe((options: Array<FSelectOption>) => {
                this.options = options
            })

        this.select.valueChanges.pipe(takeWhile(() => this.alive)).subscribe(value => {
            this.translationsService.language$.next(value)
        })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
