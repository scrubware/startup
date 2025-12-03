
import { Profile } from "./contentModels";

export type AuthToken = string;

export class AuthData {
    constructor (
        readonly username: string,
        readonly authToken: AuthToken
    ) {}
}; export const asAuthData = (x: any): AuthData => ({ ...x });