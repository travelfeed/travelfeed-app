import { TestBed, inject } from '@angular/core/testing'

import { TravelPreviewService } from './travel-preview.service'

describe('TravelPreviewService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TravelPreviewService],
        })
    })

    it(
        'should be created',
        inject([TravelPreviewService], (service: TravelPreviewService) => {
            expect(service).toBeTruthy()
        }),
    )
})
