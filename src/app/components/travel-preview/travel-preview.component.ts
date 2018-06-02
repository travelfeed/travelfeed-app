import { Component, OnInit, Input } from '@angular/core'
import { TravelPreviewService } from './travel-preview.service'
import { Observable } from 'rxjs'
import { Article } from '../../store/articles'

@Component({
    selector: 'cmp-travel-preview',
    templateUrl: './travel-preview.component.html',
    styleUrls: ['./travel-preview.component.scss'],
})
export class TravelPreviewComponent implements OnInit {
    @Input() public type: 'newest' | 'best-rated'

    @Input() public order: 'asc' | 'desc'

    @Input() public limit: number

    public articles$: Observable<Array<Article>>

    public constructor(public travelPreviewService: TravelPreviewService) {}

    public ngOnInit(): void {
        this.articles$ = this.travelPreviewService.fetchArticles(this.type, this.order, this.limit)
    }
}
