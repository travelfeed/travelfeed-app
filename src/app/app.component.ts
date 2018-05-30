import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { TranslateService } from '@ngx-translate/core'
import { Observable } from 'rxjs'
import { AppState } from './store'
import { LanguagesState, LanguagesAction, LanguagesActionTypes } from './store/languages'

@Component({
    selector: 'cmp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public state$: Observable<LanguagesState> = this.store.pipe(select('languages'))

    public constructor(private store: Store<AppState>, private translationService: TranslateService) {}

    public ngOnInit(): void {
        this.translationService.setDefaultLang('en')

        this.store.dispatch<LanguagesAction>({
            type: LanguagesActionTypes.LOAD_LANGUAGES,
        })

        this.store.dispatch<LanguagesAction>({
            type: LanguagesActionTypes.SELECT_LANGUAGE,
            payload: 'en',
        })
    }
}
