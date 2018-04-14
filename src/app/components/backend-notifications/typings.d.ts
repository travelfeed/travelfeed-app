export interface BackendNotification {
    type: 'info' | 'success' | 'warning' | 'error'
    text: string
    duration?: number
}
