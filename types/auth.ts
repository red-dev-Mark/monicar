// 사용자 정보 (이메일, 닉네임(이름), 소속, 부서)
export interface User {
    email: string
    nickname?: string
    companyName: string
    departmentName: string
}
