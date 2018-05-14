import { TestBed, inject } from '@angular/core/testing'

import { BackendNotificationsService } from './backend-notifications.service'

describe('BackendNotificationsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BackendNotificationsService],
        })
    })

    it(
        'should be created',
        inject([BackendNotificationsService], (service: BackendNotificationsService) => {
            expect(service).toBeTruthy()
        }),
    )
})
