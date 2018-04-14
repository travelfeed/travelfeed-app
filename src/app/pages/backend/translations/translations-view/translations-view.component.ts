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

    public loading: boolean = false

    private alive: boolean = true

    public constructor(public translationsService: TranslationsService) {}

    public ngOnInit(): void {
        this.loading = true
        this.translationsService.language$
            .pipe(
                takeWhile(() => this.alive),
                filter(language => language !== null),
                switchMap(language => this.translationsService.fetchTranslations(language)),
                switchMap(() => this.translationsService.translations$)
            )
            .subscribe((translations: Array<Translation>) => {
                this.translations = translations
                this.loading = false
            })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
