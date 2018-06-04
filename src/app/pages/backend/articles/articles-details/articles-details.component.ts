import { Component, OnInit, OnChanges, OnDestroy, Input, SimpleChanges } from '@angular/core'
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms'
import { Store } from '@ngrx/store'
import { takeWhile } from 'rxjs/operators'
import { Article, ArticlesState, ArticlesAction, ArticlesActionTypes } from '../../../../store/articles'

@Component({
    selector: 'cmp-articles-details',
    templateUrl: './articles-details.component.html',
    styleUrls: ['./articles-details.component.scss'],
})
export class ArticlesDetailsComponent implements OnInit, OnChanges, OnDestroy {
    @Input() public article: Article

    public articleForm: FormGroup

    private alive: boolean = true

    public constructor(private formBuilder: FormBuilder, private store: Store<ArticlesState>) {}

    public ngOnInit(): void {
        this.articleForm = this.formBuilder.group({
            country: this.article.country.name,
            city: this.article.city,
            latitude: this.article.latitude,
            longitude: this.article.longitude,
        })

        this.articleForm.valueChanges.pipe(takeWhile(() => this.alive)).subscribe(values => {
            this.article = { ...this.article, ...values }
        })
    }

    public ngOnChanges(changes: SimpleChanges): void {
        const { firstChange, currentValue } = changes.article

        if (firstChange) {
            return
        }

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
