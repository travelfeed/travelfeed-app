import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CountryPreviewComponent } from './country-preview.component'

describe('CountryPreviewComponent', () => {
    let component: CountryPreviewComponent
    let fixture: ComponentFixture<CountryPreviewComponent>

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [CountryPreviewComponent]
            }).compileComponents()
        })
    )

    beforeEach(() => {
        fixture = TestBed.createComponent(CountryPreviewComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
