
export type AuthToken = String;

export class AuthData {
    readonly username: string;
    readonly authToken: AuthToken;

    constructor (username: string, authToken: AuthToken) {
        this.username = username;
        this.authToken = authToken;
    }
}

// POST api/user/register
export class RegisterRequest {
    readonly username: string;
    readonly password: string;
    readonly displayName: string;

    // Full version
    // - phone number
    // - email (optional)

    constructor (username: string, password: string, displayName: string) {
        this.username = username;
        this.password = password;
        this.displayName = displayName;
    }
}
export class RegisterResult extends AuthData {}

// POST api/user/login
export class LoginRequest {
    readonly username: string;
    readonly password: string;

    constructor (username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}
export class LoginResult extends AuthData {}

// DELETE api/user/logout
export class LogoutRequest {
    readonly authToken: AuthToken;

    constructor (authToken: AuthToken) {
        this.authToken = authToken;
    }
}
export class LogoutResult {

}

export class GetProfileRequest {
    readonly username: string;

    constructor(username: string) {
        this.username = username;
    }
}