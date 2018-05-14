import { Component, OnInit, OnDestroy } from '@angular/core'
import { trigger, state, style, transition, animate } from '@angular/animations'
import { BackendNotificationsService } from './backend-notifications.service'
import { takeWhile } from 'rxjs/operators'
import { BackendNotification } from './typings'

@Component({
    selector: 'cmp-backend-notifications',
    templateUrl: './backend-notifications.component.html',
    styleUrls: ['./backend-notifications.component.scss'],
    animations: [
        trigger('fade', [
            state('in', style({})),
            transition(':leave', [
                style({
                    opacity: 1,
                }),
                animate(
                    800,
                    style({
                        opacity: 0,
                    }),
                ),
            ]),
        ]),
    ],
})
export class BackendNotificationsComponent implements OnInit, OnDestroy {
    public items: Array<BackendNotification> = []

    private alive: boolean = true

    public constructor(public backendNotificationsService: BackendNotificationsService) {}

    public ngOnInit(): void {
        this.backendNotificationsService.notification$
            .pipe(takeWhile(() => this.alive))
            .subscribe((notification: BackendNotification) => {
                if (notification === null) {
                    this.items = []
                    return
                }

                // push notification into items
                this.items.push(notification)

                // automatically dismiss item after time
                if (notification.duration && notification.duration > 0) {
                    setTimeout(() => this.dismiss(notification), notification.duration)
                }
            })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }

    public dismiss(notification: BackendNotification): void {
        this.items = this.items.filter(item => item !== notification)
    }
}
