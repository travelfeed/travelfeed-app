import { Component, OnInit, OnDestroy } from '@angular/core'
import { TranslationsService } from '../translations.service'
import { TranslationLanguage, Translation } from '../typings'
import { takeWhile, switchMap, filter } from 'rxjs/operators'

@Component({
    selector: 'cmp-translations-view',
    templateUrl: './translations-view.component.html',
    styleUrls: ['./translations-view.component.scss']
})
export class TranslationsViewComponent implements OnInit, OnDestroy {
    public translations: Array<Translation>

    public saving: boolean = false

    private alive: boolean = true

    public constructor(public translationsService: TranslationsService) {}

    public ngOnInit(): void {
        this.translationsService.language$
            .pipe(
                takeWhile(() => this.alive),
                filter(language => language !== null),
                switchMap((language: TranslationLanguage) => {
                    return this.translationsService.fetchTranslations(language)
                })
            )
            .subscribe((translations: Array<Translation>) => {
                this.translations = translations
            })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }

    public save(translation: Translation): void {
        this.saving = true
        this.translationsService
            .save(translation)
            .pipe(takeWhile(() => this.alive))
            .subscribe(() => {
                this.saving = false
            })
    }

    public saveAll(): void {
        this.saving = true
        this.translationsService
            .saveAll(this.translations)
            .pipe(takeWhile(() => this.alive))
            .subscribe(() => {
                this.saving = false
            })
    }
}
