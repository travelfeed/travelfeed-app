import { Component, OnDestroy } from '@angular/core'
import { takeWhile } from 'rxjs/operators'
import { SocketService } from './services/socket/socket.service'
import { SocketEvent } from './services/socket/typings'

@Component({
    selector: 'cmp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
    private alive: boolean = true

    public constructor(public socketService: SocketService) {
        this.socketService.connection.pipe(takeWhile(() => this.alive)).subscribe(socket => {
            console.log(socket)
        })

        this.socketService.all.pipe(takeWhile(() => this.alive)).subscribe((event: SocketEvent) => {
            console.log('==> all ==>', event)
        })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
