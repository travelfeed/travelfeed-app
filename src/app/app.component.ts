import { Component, OnInit, OnDestroy } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { TranslateService } from '@ngx-translate/core'
import { Observable } from 'rxjs'
import { takeWhile } from 'rxjs/operators'
import { AppState } from './store'
import { LanguagesState, LanguagesAction, LanguagesActionTypes } from './store/languages'
import { LanguagesService } from './shared/languages/languages.service'
import { SocketService } from './shared/socket/socket.service'
import { SocketEvent } from './shared/typings'

@Component({
    selector: 'cmp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    public state$: Observable<LanguagesState> = this.store.pipe(select('languages'))

    private alive: boolean = true

    public constructor(
        private store: Store<AppState>,
        private translationService: TranslateService,
        private languageService: LanguagesService,
        private socketService: SocketService,
    ) {}

    public ngOnInit(): void {
        this.translationService.setDefaultLang('en')

        this.store.dispatch<LanguagesAction>({
            type: LanguagesActionTypes.LOAD_LANGUAGES,
        })

        this.store.dispatch<LanguagesAction>({
            type: LanguagesActionTypes.SELECT_LANGUAGE,
            payload: 'en',
        })

        this.languageService.language$.pipe(takeWhile(() => this.alive)).subscribe(language => {
            this.translationService.use(language)
        })

        this.socketService.connection$.pipe(takeWhile(() => this.alive)).subscribe(socket => {
            console.log('==> connection', socket)
        })

        this.socketService.all$.pipe(takeWhile(() => this.alive)).subscribe((event: SocketEvent) => {
            console.log('==> all socket events', event)
        })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
