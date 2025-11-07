
import { User } from "../shared/models.js"
import { AuthData, AuthToken } from "../shared/api.js"

export interface DAO {
    createUser(username: string, password: string, phoneNumber: string): Promise<User>;
    getUser(username: string): Promise<User>;
    passwordIsCorrect(username: string, password: string) : Promise<boolean>;

    createAuth(username: string, password: string): Promise<AuthData>;
    authIsValid(authToken: AuthToken): Promise<boolean>;
    deleteAuth(authToken: AuthToken): Promise<void>;
}

