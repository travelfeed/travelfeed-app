import { Component, OnInit, Input } from '@angular/core'

@Component({
    selector: 'cmp-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
    @Input() public type: string
    @Input() public name: string
    @Input() public animate: boolean = false

    public constructor() {}

    //

    public ngOnInit() {}
}
