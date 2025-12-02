
import { Profile } from "./contentModels";

export type AuthToken = string;

export class AuthData {
    constructor (
        readonly username: string,
        readonly authToken: AuthToken
    ) {}
}; export const asAuthData = (x: any): AuthData => ({ ...x });


export class UserData {
    constructor (
        readonly username: string,
        readonly profile_id: string,
        readonly profile: Profile,
    ) {}
}