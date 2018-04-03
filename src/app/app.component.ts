import { Component } from '@angular/core'
import { SocketService } from './services/socket/socket.service'
import { SocketEvent } from './services/socket/typings'

@Component({
    selector: 'cmp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public constructor(public socketService: SocketService) {
        this.socketService.connection.subscribe(socket => {})

        this.socketService.messages.subscribe((event: SocketEvent): void => {
            console.log('==> messages ==>', event.name, event.data)
        })

        this.socketService.all.subscribe((event: SocketEvent) => {
            console.log('==> all ==>', event)
        })

        // demo time
        this.socketService.send('demo #1')
        this.socketService.send({
            name: 'message',
            data: 'demo #2'
        })
        this.socketService.send('custom', 'demo #3')
        setTimeout(() => this.socketService.send('demo #4'), 4000)
    }
}
