export interface UserRole {
    id: number
    name: string
}

export interface User {
    id: number
    username: string
    email: string
    firstname: string
    lastname: string
    active: boolean
    role: UserRole
}
