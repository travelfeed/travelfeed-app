import { Component } from '@angular/core'
import { trigger, state, style, transition, animate, AnimationEvent } from '@angular/animations'
import { NotificationService } from '../../shared/notification/notification.service'

@Component({
    selector: 'cmp-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss'],
    animations: [
        trigger('fade', [
            state(
                'visible',
                style({
                    transform: 'translateY(0)',
                    opacity: 1,
                }),
            ),
            transition(':enter', [
                style({
                    transform: 'translateY(30px)',
                    opacity: 0,
                }),
                animate(200),
            ]),
            transition(':leave', [
                animate(
                    200,
                    style({
                        transform: 'translateY(30px)',
                        opacity: 0,
                    }),
                ),
            ]),
        ]),
    ],
})
export class NotificationComponent {
    public constructor(public notificationService: NotificationService) {}

    public dismiss(): void {
        this.notificationService.dismiss()
    }
}
