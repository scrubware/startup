
import { FeedItem } from './models.js'

export type AuthToken = string;

export class AuthData {
    readonly username: string;
    readonly authToken: AuthToken;

    constructor (username: string, authToken: AuthToken) {
        this.username = username;
        this.authToken = authToken;
    }
}





// ########## api/user

// GET api/user/available
export class AvailableRequest {
    readonly username: string;

    constructor (username: string) {
        this.username = username;
    } 
}
export class AvailableResult {
    readonly available: boolean;

    constructor (available: boolean) {
        this.available = available;
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
export class LoginFailure { 
    readonly msg: string;

    constructor (msg: string) {
        this.msg = msg;
    }
}
export const LoginFailureWrongPassword = new LoginFailure("Incorrect password!")
export const LoginFailureWrongUsername = new LoginFailure("Username is not registered!")

// DELETE api/user/logout
export class LogoutRequest {}
export class LogoutResult {}




// ########## api/content

// GET api/content/profile
export class GetProfileRequest {
    readonly fetchUsername: string;

    constructor(fetchUsername: string) {
        this.fetchUsername = fetchUsername;
    }
}

// GET api/content/feed
export class GetFeedRequest extends AuthData {}
export class GetFeedResult {
    feedItems: FeedItem[];
}

// POST api/content/make
export class SubmitMakeRequest {

}

// DELETE api/content/remove
export class RemovePostRequest {

}
