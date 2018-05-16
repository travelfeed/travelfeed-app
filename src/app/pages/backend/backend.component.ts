import { Component, OnInit, OnDestroy } from '@angular/core'
import { takeWhile } from 'rxjs/operators'
import { NetworkService } from '../../shared/network/network.service'

@Component({
    selector: 'cmp-backend',
    templateUrl: './backend.component.html',
    styleUrls: ['./backend.component.scss'],
})
export class BackendComponent implements OnInit, OnDestroy {
    private alive: boolean = true

    public constructor(private networkService: NetworkService) {}

    public ngOnInit(): void {
        this.networkService.online$.pipe(takeWhile(() => this.alive)).subscribe((online: boolean) => {
            console.log(`==> network state changed: ${online ? 'online' : 'offline'}`)

            if (!online) {
                // show notification
            } else {
                // hide notification
            }
        })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
