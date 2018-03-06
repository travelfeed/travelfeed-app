import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'cmp-mod-travel-preview',
    templateUrl: './mod-travel-preview.component.html',
    styleUrls: ['./mod-travel-preview.component.scss']
})
export class ModTravelPreviewComponent implements OnInit {
    public modals = [
        'Hallo Stella',
        'Test Import',
        'Wilde Rivertour durch Bolivien',
        'Das sind gute Neuigkeiten'
    ]

    public constructor() {}

    public ngOnInit() {}
}
