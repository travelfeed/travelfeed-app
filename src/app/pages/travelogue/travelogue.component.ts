import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'cmp-travelogue',
    templateUrl: './travelogue.component.html',
    styleUrls: ['./travelogue.component.scss']
})
export class TravelogueComponent implements OnInit {
    lat: number = 51.678418
    lng: number = 7.809007

    constructor() {}

    ngOnInit() {}
}
