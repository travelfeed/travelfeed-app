import { Component } from '@angular/core'

@Component({
    selector: 'cmp-travel-preview',
    templateUrl: './travel-preview.component.html',
    styleUrls: ['./travel-preview.component.scss']
})
export class TravelPreviewComponent {
    public modals = [
        'Hallo Stella',
        'Test Import',
        'Wilde Rivertour durch Bolivien',
        'Das sind gute Neuigkeiten'
    ]

    public constructor() {}
}
