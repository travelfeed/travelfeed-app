import { Component, Input } from '@angular/core'

@Component({
    selector: 'cmp-travel-preview',
    templateUrl: './travel-preview.component.html',
    styleUrls: ['./travel-preview.component.scss'],
})
export class TravelPreviewComponent {
    @Input() public orderby: string
    @Input() public elementsshown: number // TODO: Bei der Datenbankabfrage mitsenden

    public constructor() {}
}
