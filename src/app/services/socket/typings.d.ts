export interface SocketEvent {
    name: 'message' | 'custom'
    data: any
}
