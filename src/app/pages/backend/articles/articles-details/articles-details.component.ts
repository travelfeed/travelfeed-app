import { Component, OnInit, OnChanges, OnDestroy, Input, SimpleChanges } from '@angular/core'
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { takeWhile, map } from 'rxjs/operators'
import { AppState } from '../../../../store'
import { Article, ArticlesAction, ArticlesActionTypes } from '../../../../store/articles'
import { FSelectOption, FSelectPlaceholder } from '../../../../components/form-elements/typings'
import { CountriesService } from '../../countries/countries.service'

@Component({
    selector: 'cmp-articles-details',
    templateUrl: './articles-details.component.html',
    styleUrls: ['./articles-details.component.scss'],
})
export class ArticlesDetailsComponent implements OnInit, OnChanges, OnDestroy {
    @Input() public article: Article

    public options$: Observable<Array<FSelectOption>>

    public placeholder: FSelectPlaceholder = {
        label: 'BACKEND_PLEASE_SELECT',
        value: null,
        selectable: false,
    }

    public articleForm: FormGroup

    private alive: boolean = true

    public constructor(
        private formBuilder: FormBuilder,
        private store: Store<AppState>,
        private countriesService: CountriesService,
    ) {
        this.options$ = this.countriesService.fetchCountries().pipe(
            map(response => {
                return response.data.map(item => ({
                    label: item.name,
                    value: item,
                }))
            }),
        )
    }

    public ngOnInit(): void {
        console.log('==> ngOnInit', this.article.country)
        this.articleForm = this.formBuilder.group({
            country: this.article.country,
            city: this.article.city,
            latitude: this.article.latitude,
            longitude: this.article.longitude,
        })

        this.articleForm.valueChanges.pipe(takeWhile(() => this.alive)).subscribe(values => {
            this.article = { ...this.article, ...values }
            console.log('==> value changed', this.article.country)
        })
    }

    public ngOnChanges(changes: SimpleChanges): void {
        const { firstChange, currentValue } = changes.article

        if (firstChange) {
            return
        }

        console.log('==> ', this.article.country)
        this.articleForm.setValue({
            country: currentValue.country,
            city: currentValue.city,
            latitude: currentValue.latitude,
            longitude: currentValue.longitude,
        })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }

    public get country(): AbstractControl {
        return this.articleForm.get('country')
    }

    public get city(): AbstractControl {
        return this.articleForm.get('city')
    }

    public get latitude(): AbstractControl {
        return this.articleForm.get('latitude')
    }

    public get longitude(): AbstractControl {
        return this.articleForm.get('longitude')
    }

    public save(): void {
        this.store.dispatch<ArticlesAction>({
            type: ArticlesActionTypes.SAVE_ARTICLE,
            payload: this.article,
        })
    }

    public delete(): void {
        this.store.dispatch<ArticlesAction>({
            type: ArticlesActionTypes.DELETE_ARTICLE,
            payload: this.article,
        })
    }

    public publish(): void {
        this.store.dispatch<ArticlesAction>({
            type: ArticlesActionTypes.PUBLISH_ARTICLE,
            payload: this.article,
        })
    }

    public unpublish(): void {
        this.store.dispatch<ArticlesAction>({
            type: ArticlesActionTypes.UNPUBLISH_ARTICLE,
            payload: this.article,
        })
    }
}
