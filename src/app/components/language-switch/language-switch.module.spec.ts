import { LanguageSwitchModule } from './language-switch.module'

describe('LanguageSwitchModule', () => {
    let languageSwitchModule: LanguageSwitchModule

    beforeEach(() => {
        languageSwitchModule = new LanguageSwitchModule()
    })

    it('should create an instance', () => {
        expect(languageSwitchModule).toBeTruthy()
    })
})
