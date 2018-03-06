import { Component, OnInit, Input } from '@angular/core'

@Component({
    selector: 'cmp-form-input',
    templateUrl: './form-input.component.html',
    styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
    @Input() public type: string = 'text'
    public constructor() {}

    public ngOnInit() {}
}
