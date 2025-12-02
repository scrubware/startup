
import { FeedItem, Profile } from './models.js'

export type AuthToken = string;

export class AuthData {
    constructor (
        readonly username: string,
        readonly authToken: AuthToken
    ) {}
}; export const asAuthData = (x: any): AuthData => ({ ...x });



// ########## api/user





// GET api/user/available
export class AvailableRequest {
    constructor (
        public readonly username: string
    ) {} 
}
export class AvailableResult {
    constructor (
        public readonly available: boolean
    ) {}
}






// POST api/user/register
export class RegisterRequest {
    constructor (
        public readonly username: string,
        public readonly password: string,
        public readonly displayName: string
    ) {}
}
export class RegisterResult extends AuthData {}






// POST api/user/login
export class LoginRequest {
    constructor (
        public readonly username: string,
        public readonly password: string
    ) {}
}
export class LoginResult extends AuthData {}
export class LoginFailure { 
    constructor (
        public readonly msg: string
    ) {}
}
export const LoginFailureWrongPassword = new LoginFailure("Incorrect password!")
export const LoginFailureWrongUsername = new LoginFailure("Username is not registered!")





// DELETE api/user/logout
export class LogoutRequest {}
export class LogoutResult {}




// ########## api/content

// GET api/content/profile
export class GetProfileRequest {
    constructor(
        public readonly fetchUsername: string
    ) {}
}





// GET api/content/feed
export class GetFeedResult {
    constructor(
        public readonly feedItems: FeedItem[]
    ) {}
}





// POST api/content/make
export class MakeFeedItemRequest {
    constructor(
        public readonly feedItem: FeedItem
    ) {}
}



export class UpdateNameRequest {
    constructor(
        public readonly newDisplayName: string
    ) {}
}
export class UpdateNameResult {
    constructor(
        public readonly updatedProfile: Profile
    ) {}
}