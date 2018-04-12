import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { TranslationsItemComponent } from './translations-item.component'

describe('TranslationsItemComponent', () => {
    let component: TranslationsItemComponent
    let fixture: ComponentFixture<TranslationsItemComponent>

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [TranslationsItemComponent]
            }).compileComponents()
        })
    )

    beforeEach(() => {
        fixture = TestBed.createComponent(TranslationsItemComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
