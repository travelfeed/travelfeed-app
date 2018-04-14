import { Injectable } from '@angular/core'
import { Router, RouterEvent, NavigationStart } from '@angular/router'
import { Subject } from 'rxjs/Subject'
import { filter } from 'rxjs/operators'
import { BackendNotification } from './typings'

@Injectable()
export class BackendNotificationsService {
    public notification$: Subject<BackendNotification> = new Subject()

    public constructor(private router: Router) {
        this.router.events
            .pipe(filter((event: RouterEvent) => event instanceof NavigationStart))
            .subscribe(event => {
                this.clear()
            })
    }

    public send(notification: BackendNotification): void {
        this.notification$.next(notification)
    }

    public clear(): void {
        this.notification$.next(null)
    }
}
