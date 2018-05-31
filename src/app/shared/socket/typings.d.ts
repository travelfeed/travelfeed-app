export type SocketEventName = 'connect' | 'disconnect' | 'message' | 'custom'

export interface SocketEvent {
    name: SocketEventName
    data: any
}
