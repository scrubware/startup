
import type { DAO, AuthToken } from "./DAO.ts"
import { User, FeedItem  } from "../shared/models.ts"

export class MemoryDAO implements DAO {
    users: User[] = []
    posts: FeedItem[] = []

    // User
    async createUser(username:string, password:string, phoneNumber:string): Promise<User> {
        let user: User = new User(username, password, null, new Date())
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
    async createAuth(username:string, password:string): Promise<AuthToken> {
        throw new Error("Method not implemented.")
    }
    async authIsValid(authToken: AuthToken): Promise<boolean> {
        throw new Error("Method not implemented.")
    }
    deleteAuth(authToken: AuthToken): void {
        throw new Error("Method not implemented.")
    }
}