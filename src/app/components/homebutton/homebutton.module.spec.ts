import { HomebuttonModule } from './homebutton.module'

describe('HomebuttonModule', () => {
    let homebuttonModule: HomebuttonModule

    beforeEach(() => {
        homebuttonModule = new HomebuttonModule()
    })

    it('should create an instance', () => {
        expect(homebuttonModule).toBeTruthy()
    })
})
