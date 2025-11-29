import { AuthData, AuthToken } from "../shared/api";
import { User, FeedItem } from "../shared/models";
import { DAO } from "./DAO";



export class DatabaseDAO implements DAO {
    createUser(username: string, password: string, displayName: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    getUser(username: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    passwordIsCorrect(username: string, password: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    createAuth(username: string, password: string): Promise<AuthData> {
        throw new Error("Method not implemented.");
    }
    authIsValid(authToken: AuthToken): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    deleteAuth(authToken: AuthToken): Promise<void> {
        throw new Error("Method not implemented.");
    }
    listAuths(): Promise<Array<AuthData>> {
        throw new Error("Method not implemented.");
    }
    createPost(feedItem: FeedItem): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    getFeed(): Promise<Array<FeedItem>> {
        throw new Error("Method not implemented.");
    }
    clearFeed() {
        throw new Error("Method not implemented.");
    }
    
}