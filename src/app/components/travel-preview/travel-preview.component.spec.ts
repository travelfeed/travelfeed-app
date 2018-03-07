import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { TravelPreviewComponent } from './travel-preview.component'

describe('ModTravelPreviewComponent', () => {
    let component: TravelPreviewComponent
    let fixture: ComponentFixture<TravelPreviewComponent>

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [TravelPreviewComponent]
            }).compileComponents()
        })
    )

    beforeEach(() => {
        fixture = TestBed.createComponent(TravelPreviewComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
