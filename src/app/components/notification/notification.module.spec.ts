import { NotificationModule } from './notification.module'

describe('NotificationsModule', () => {
    let notificationsModule: NotificationModule

    beforeEach(() => {
        notificationsModule = new NotificationModule()
    })

    it('should create an instance', () => {
        expect(notificationsModule).toBeTruthy()
    })
})
