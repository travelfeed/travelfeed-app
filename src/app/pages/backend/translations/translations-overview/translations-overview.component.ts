import { Component, OnInit, OnDestroy } from '@angular/core'
import { takeWhile, map } from 'rxjs/operators'
import { TranslationsService } from '../translations.service'
import { ApiResponse } from '../../../../shared/typings'
import { FSelectOption } from '../../../../components/form-elements/typings'
import { TranslationLanguage } from '../typings'

@Component({
    selector: 'cmp-translations-overview',
    templateUrl: './translations-overview.component.html',
    styleUrls: ['./translations-overview.component.scss']
})
export class TranslationsOverviewComponent implements OnInit, OnDestroy {
    public options: Array<FSelectOption> = []

    private alive: boolean = true

    public constructor(private translationsService: TranslationsService) {}

    public ngOnInit(): void {
        this.translationsService
            .fetchLanguages()
            .pipe(
                takeWhile(() => this.alive),
                map((response: ApiResponse) => {
                    return response.data.map((item: TranslationLanguage) => ({
                        text: item.name,
                        value: item
                    }))
                })
            )
            .subscribe((options: Array<FSelectOption>) => {
                this.options = options
            })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }

    public get language(): TranslationLanguage {
        return this.translationsService.language$.getValue()
    }

    public set language(value: TranslationLanguage) {
        this.translationsService.language$.next(value)
    }
}
