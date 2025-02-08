export interface User {
    email: string
    nickname?: string
    companyName: string
    departmentName: string
}

export interface SignInRequestModel {
    userId: string
    password: string
}
