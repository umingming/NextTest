export interface User {
    _id?: string;
    name: string;
    email: string;
    password?: string; // 클라이언트로 전송 시 제외
    image?: string;
    createdAt?: Date;
}

export interface RegisterDto {
    name: string;
    email: string;
    password: string;
}

export interface LoginDto {
    email: string;
    password: string;
}

