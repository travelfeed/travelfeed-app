import { Injectable } from '@angular/core'
import { connect } from 'socket.io-client'
import { Subject, Observable, of, fromEvent, merge } from 'rxjs'
import { filter, map } from 'rxjs/operators'
import { environment } from '../../../environments/environment'
import { SocketEvent, SocketEventName } from './typings'

@Injectable()
export class SocketService {
    private socket: SocketIOClient.Socket = connect(environment.socketUrl)
    private events: Subject<SocketEvent> = new Subject<SocketEvent>()

    public constructor() {
        const events: Array<SocketEventName> = ['connect', 'disconnect', 'message', 'custom']
        const transformEvent = (event: SocketEventName): Observable<SocketEvent> => {
            return fromEvent<any>(this.socket, event).pipe(
                map(data => ({
                    name: event,
                    data: data,
                })),
            )
        }

        merge(...events.map(event => transformEvent(event)))
            .pipe(filter(value => typeof value !== 'undefined'))
            .subscribe(event => {
                this.events.next(event)
            })
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
