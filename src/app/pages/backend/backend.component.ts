import { Component, OnInit, OnDestroy } from '@angular/core'
import { takeWhile } from 'rxjs/operators'
import { NetworkService } from '../../shared/network/network.service'
import { NotificationService } from '../../shared/notification/notification.service'
import { Notification } from '../../shared/typings'

@Component({
    selector: 'cmp-backend',
    templateUrl: './backend.component.html',
    styleUrls: ['./backend.component.scss'],
})
export class BackendComponent implements OnInit, OnDestroy {
    private alive: boolean = true

    public constructor(
        private networkService: NetworkService,
        public notificationService: NotificationService,
    ) {}

    public ngOnInit(): void {
        this.networkService.online$.pipe(takeWhile(() => this.alive)).subscribe((online: boolean) => {
            if (online) {
                this.notificationService.dismiss()
                return
            }

            this.notificationService.warning(`
                You are currently offline! All your changes will be synced once you are back online.
            `)
        })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
