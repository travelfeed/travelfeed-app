import { Component } from '@angular/core'

@Component({
    selector: 'cmp-travelogue',
    templateUrl: './travelogue.component.html',
    styleUrls: ['./travelogue.component.scss']
})
export class TravelogueComponent {
    public latitude: number = 51.678418
    public longitude: number = 7.809007

    public constructor() {}
}
