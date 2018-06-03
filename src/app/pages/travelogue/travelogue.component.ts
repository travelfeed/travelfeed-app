import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { takeWhile } from 'rxjs/operators'
import { TravelogueService } from './travelogue.service'
import { Article } from '../../store/articles'

@Component({
    selector: 'cmp-travelogue',
    templateUrl: './travelogue.component.html',
    styleUrls: ['./travelogue.component.scss'],
})
export class TravelogueComponent implements OnInit, OnDestroy {
    public article$: Observable<Article>

    private alive: boolean = true

    public constructor(private route: ActivatedRoute, private travelogueService: TravelogueService) {}

    public ngOnInit(): void {
        this.route.paramMap.pipe(takeWhile(() => this.alive)).subscribe(params => {
            this.article$ = this.travelogueService.fetchArticle(parseInt(params.get('id'), 10))
        })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
