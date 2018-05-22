import {
    Directive,
    AfterViewInit,
    OnChanges,
    OnDestroy,
    Input,
    Output,
    EventEmitter,
    ElementRef,
    SimpleChanges,
    HostListener,
} from '@angular/core'
import * as MediumEditor from 'medium-editor'

@Directive({
    selector: '[editable]',
})
export class EditableDirective implements AfterViewInit, OnChanges, OnDestroy {
    @Input() public editable: string

    @Input() public toolbar: boolean = true

    @Output() public editableChange: EventEmitter<string> = new EventEmitter()

    private instance: MediumEditor.MediumEditor

    public constructor(private elementRef: ElementRef) {}

    public ngAfterViewInit(): void {
        this.elementRef.nativeElement.innerHTML = this.editable

        this.instance = new MediumEditor(this.elementRef.nativeElement, {
            buttonLabels: 'fontawesome',
            toolbar: this.fetchToolbar(),
            placeholder: false,
            autoLink: true,
            imageDragging: false,
            extensions: {},
        })
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes['editable'] && changes['editable'].currentValue) {
            this.elementRef.nativeElement.innerHTML = this.editable
        }
    }

    public ngOnDestroy(): void {
        this.instance.destroy()
    }

    @HostListener('keypress', ['$event'])
    public keypress(event: KeyboardEvent): void {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault()
            this.elementRef.nativeElement.blur()
        }
    }

    @HostListener('blur')
    public blur(): void {
        this.editableChange.emit(this.elementRef.nativeElement.innerHTML)
    }

    private fetchToolbar(): boolean | MediumEditor.ToolbarOptions {
        if (!this.toolbar) {
            return false
        }

        return {
            buttons: [],
        }
    }
}
