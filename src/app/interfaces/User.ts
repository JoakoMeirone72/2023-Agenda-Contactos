export interface User {
    Firstname: string,
    Lastname: string,
    Email: string,
}

export interface RegisterData extends User {
    Password: string
}

export interface LoginData {
    Email: string,
    Password: string
}