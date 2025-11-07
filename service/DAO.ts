
import { User } from "./models.js"

export type AuthToken = String;

export interface AuthData {
    readonly authToken: AuthToken;
    readonly username: string;
}

export interface DAO {
    createUser(username: string, password: string, phoneNumber: string): Promise<User>;
    getUser(username: string): Promise<User>;
    passwordIsCorrect(username: string, password: string) : Promise<boolean>;

    createAuth(username: string, password: string): Promise<AuthData>;
    authIsValid(authToken: AuthToken): Promise<boolean>;
    deleteAuth(authToken: AuthToken): Promise<void>;
}

export interface RegisterRequest {
    readonly username: string;
    readonly password: string;
    readonly phoneNumber: string;
}

export interface LoginRequest {
    readonly username: string;
    readonly password: string;
}

export interface LogoutRequest {
    readonly authToken: AuthToken;
}

export interface GetProfileRequest {
    readonly username: string;
}