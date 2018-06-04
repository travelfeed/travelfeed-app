import { Component, OnInit, OnDestroy } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs'
import { map, takeWhile } from 'rxjs/operators'
import { LanguagesService } from '../../shared/languages/languages.service'
import { FSelectOption } from '../form-elements/typings'
import { Language } from '../../store/languages'

@Component({
    selector: 'cmp-language-switch',
    templateUrl: './language-switch.component.html',
    styleUrls: ['./language-switch.component.scss'],
})
export class LanguageSwitchComponent implements OnInit, OnDestroy {
    public options$: Observable<Array<FSelectOption>>

    public fc: FormControl = new FormControl({
        id: 'en',
        name: 'English',
    })

    private alive: boolean = true

    public constructor(private languagesService: LanguagesService) {}

    public ngOnInit(): void {
        this.options$ = this.languagesService.fetchLanguages().pipe(
            map(response => {
                return response.data.map(language => ({
                    label: language.name,
                    value: language,
                }))
            }),
        )

        this.fc.valueChanges.pipe(takeWhile(() => this.alive)).subscribe((language: Language) => {
            this.languagesService.language$.next(language.id)
        })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
