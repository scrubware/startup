
import { DAO, AuthToken } from "./DAO"
import { User, FeedItem  } from "../shared/models"

export class MemoryDAO implements DAO {
    users: User[] = []
    posts: FeedItem[] = []

    // User
    async createUser(username:string, password:string, phoneNumber:string): Promise<User> {
        throw new Error("Method not implemented.")
    }
    async getUser(username: string): Promise<User | null> {
        throw new Error("Method not implemented.")
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