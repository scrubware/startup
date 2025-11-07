
export type AuthToken = String;

export class AuthData {
    readonly username: string;
    readonly authToken: AuthToken;

    constructor (username: string, authToken: AuthToken) {
        this.username = username;
        this.authToken = authToken;
    }
}

export class RegisterRequest {
    readonly username: string;
    readonly password: string;
    readonly phoneNumber: string;

    constructor (username: string, password: string, phoneNumber: string) {
        this.username = username;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }
}

export class LoginRequest {
    readonly username: string;
    readonly password: string;

    constructor (username: string, password: string, phoneNumber: string) {
        this.username = username;
        this.password = password;
    }
}

export class LogoutRequest {
    readonly authToken: AuthToken;

    constructor (authToken: AuthToken) {
        this.authToken = authToken;
    }
}

export class GetProfileRequest {
    readonly username: string;

    constructor(username: string) {
        this.username = username;
    }
}