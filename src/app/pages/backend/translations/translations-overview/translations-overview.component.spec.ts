import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { TranslationsOverviewComponent } from './translations-overview.component'

describe('TranslationsOverviewComponent', () => {
    let component: TranslationsOverviewComponent
    let fixture: ComponentFixture<TranslationsOverviewComponent>

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [TranslationsOverviewComponent]
            }).compileComponents()
        })
    )

    beforeEach(() => {
        fixture = TestBed.createComponent(TranslationsOverviewComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
