import { Component, Input } from '@angular/core'

@Component({
    selector: 'cmp-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
    @Input() public name: string

    @Input() public animate: boolean = false

    public constructor() {}
}
