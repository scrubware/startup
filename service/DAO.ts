
import { User } from "../shared/models.ts"

export type AuthToken = String;

export interface AuthData {
    readonly authToken: AuthToken;
    readonly username: string;
}

export interface DAO {
    createUser(username: string, password: string, phoneNumber: string): Promise<User>;
    getUser(username: string): Promise<User | null>;

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
    readonly username: string;
    readonly token;
}

export interface GetProfileRequest {
    readonly username: string;
}