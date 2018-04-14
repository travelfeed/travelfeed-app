import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { BackendNotificationsComponent } from './backend-notifications.component'

describe('BackendNotificationsComponent', () => {
    let component: BackendNotificationsComponent
    let fixture: ComponentFixture<BackendNotificationsComponent>

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [BackendNotificationsComponent]
            }).compileComponents()
        })
    )

    beforeEach(() => {
        fixture = TestBed.createComponent(BackendNotificationsComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
