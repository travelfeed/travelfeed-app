import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ModTravelPreviewComponent } from './mod-travel-preview.component'

describe('ModTravelPreviewComponent', () => {
    let component: ModTravelPreviewComponent
    let fixture: ComponentFixture<ModTravelPreviewComponent>

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [ModTravelPreviewComponent]
            }).compileComponents()
        })
    )

    beforeEach(() => {
        fixture = TestBed.createComponent(ModTravelPreviewComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
