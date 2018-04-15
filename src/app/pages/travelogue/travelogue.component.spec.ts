import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { TravelogueComponent } from './travelogue.component'

describe('TravelogueComponent', () => {
    let component: TravelogueComponent
    let fixture: ComponentFixture<TravelogueComponent>

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [TravelogueComponent]
            }).compileComponents()
        })
    )

    beforeEach(() => {
        fixture = TestBed.createComponent(TravelogueComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
