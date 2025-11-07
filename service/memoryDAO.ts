
import { v4 as uuid } from 'uuid';
import type { DAO, AuthToken, AuthData } from "./DAO.ts"
import { User, FeedItem  } from "../shared/models.ts"

export class MemoryDAO implements DAO {
    users: User[] = []
    auths: AuthData[] = []
    posts: FeedItem[] = []

    // User
    async createUser(username:string, password:string, phoneNumber:string): Promise<User> {
        let user: User = new User(username, password, phoneNumber, new Date())
        this.users.push(user);
        return user;
    }

    async getUser(username: string): Promise<User | null> {
        this.users.forEach((user) => {
            if (user.username == username) {
                return user;
            }
        })
        return null;
    }


    // Auth
    async createAuth(username:string, password:string): Promise<AuthData> {
        let auth: AuthData = {username, authToken: uuid()}
        this.auths.push(auth);
        return auth;
    }
    async authIsValid(authToken: AuthToken): Promise<boolean> {
        this.auths.forEach((authData) => {
            if (authData.authToken == authToken) {
                return true;
            }
        })
        return false;
    }
    async deleteAuth(authToken: AuthToken): Promise<void> {
        for (let i = this.auths.length - 1; i >= 0; i--) {
            if (this.auths[i].authToken == authToken) {
                this.auths.splice(i, 1);
                break;
            }
        }
    }

    // Posts


    // Feed
}