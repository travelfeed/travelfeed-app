import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { BackendNavigationComponent } from './backend-navigation.component'

describe('BackendNavigationComponent', () => {
    let component: BackendNavigationComponent
    let fixture: ComponentFixture<BackendNavigationComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BackendNavigationComponent],
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(BackendNavigationComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
