import { Injectable } from '@angular/core'
import { connect } from 'socket.io-client'
import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
import { fromEvent } from 'rxjs/observable/fromEvent'
import { merge } from 'rxjs/observable/merge'
import { filter } from 'rxjs/operators'
import { environment } from '../../../environments/environment'
import { SocketEvent } from './typings'

@Injectable()
export class SocketService {
    private socket: SocketIOClient.Socket = connect(environment.socketUrl)
    private events: Subject<SocketEvent> = new Subject()

    public constructor() {
        const events: Array<any> = ['connect', 'disconnect', 'message', 'custom']

        merge(...events.map(event => fromEvent(this.socket, event)))
    }

    public send(event: string | SocketEvent): void
    public send(event: string, message?: string): void
    public send(event: string | SocketEvent, message?: string): void {
        if (typeof event !== 'string') {
            this.socket.emit(event.name, event.data)
        } else if (typeof event === 'string' && typeof message !== 'undefined') {
            this.socket.emit(event, message)
        } else if (typeof event === 'string' && typeof message === 'undefined') {
            this.socket.send(event)
        }
    }

    public get connection(): Observable<SocketIOClient.Socket> {
        return of(this.socket)
    }

    public get messages(): Observable<any> {
        return this.events.pipe(filter((event: SocketEvent) => event.name === 'message'))
    }

    public get all(): Observable<any> {
        return this.events
    }
}
