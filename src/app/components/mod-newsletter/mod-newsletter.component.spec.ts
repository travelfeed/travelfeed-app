import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ModNewsletterComponent } from './mod-newsletter.component'

describe('ModNewsletterComponent', () => {
    let component: ModNewsletterComponent
    let fixture: ComponentFixture<ModNewsletterComponent>

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [ModNewsletterComponent]
            }).compileComponents()
        })
    )

    beforeEach(() => {
        fixture = TestBed.createComponent(ModNewsletterComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
