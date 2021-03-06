import { Component, AfterViewInit, OnDestroy, Input, ViewChild, ElementRef } from '@angular/core'
import flatpickr from 'flatpickr'
import { Instance } from 'flatpickr/dist/types/instance'
import { BaseOptions } from 'flatpickr/dist/types/options'
import { German } from 'flatpickr/dist/l10n/de'
import { FInputComponent } from '../f-input/f-input.component'
import { FDateOptions } from '../typings'

@Component({
    selector: 'cmp-f-date',
    templateUrl: './f-date.component.html',
    styleUrls: ['./f-date.component.scss'],
})
export class FDateComponent extends FInputComponent implements AfterViewInit, OnDestroy {
    public static readonly cmpName: string = 'FDateComponent'

    @Input() public options: Partial<FDateOptions> = {}

    @ViewChild('inputRef') public inputRef: ElementRef

    private instance: Instance

    private selected: Date

    public ngAfterViewInit(): void {
        this.initFlatpickr()
    }

    public ngOnDestroy(): void {
        this.destroyFlatpickr()
    }

    private initFlatpickr(): void {
        const options: Partial<BaseOptions> = {
            allowInput: true,
            dateFormat: 'd. F Y',
            defaultDate: this.selected || null,
            locale: German,
            weekNumbers: true,
            onChange: value => (this.selected = value[0]),
        }

        this.destroyFlatpickr()

        this.instance = flatpickr(this.inputRef.nativeElement, options) as Instance
    }

    private destroyFlatpickr(): void {
        if (this.instance) {
            this.instance.destroy()
        }
    }
}
