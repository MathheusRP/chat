export interface IUserLogin {
    email: string
    password: string
}

export interface ICreateUser {
    name: string
    email: string
    password: string
    confirmPassword: string
    urlPhoto?: string
}