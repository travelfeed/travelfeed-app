import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
    selector: 'cmp-styleguide',
    templateUrl: './styleguide.component.html',
    styleUrls: ['./styleguide.component.scss']
})
export class StyleguideComponent {
    public demoForm: FormGroup

    public constructor(private formBuilder: FormBuilder) {
        this.demoForm = this.formBuilder.group({
            test: [null, [Validators.required]]
        })
    }

    public get test() {
        return this.demoForm.get('test')
    }

    public submit(): void {
        console.log('==> submit form', this.demoForm.value)
    }

    public reset(): void {
        this.demoForm.reset()
    }
}
