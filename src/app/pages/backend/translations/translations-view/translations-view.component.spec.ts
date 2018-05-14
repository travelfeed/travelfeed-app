import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { TranslationsViewComponent } from './translations-view.component'

describe('TranslationsViewComponent', () => {
    let component: TranslationsViewComponent
    let fixture: ComponentFixture<TranslationsViewComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TranslationsViewComponent],
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(TranslationsViewComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
