import { TestBed, inject } from '@angular/core/testing'

import { TravelogueService } from './travelogue.service'

describe('TravelogueService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TravelogueService],
        })
    })

    it(
        'should be created',
        inject([TravelogueService], (service: TravelogueService) => {
            expect(service).toBeTruthy()
        }),
    )
})
