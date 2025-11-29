
import { FeedItem, User } from "../shared/models.js"
import { AuthData, AuthToken } from "../shared/api.js"

export interface DAO {

    // User
    createUser(username: string, password: string, displayName: string): Promise<User>;
    getUser(username: string): Promise<User>;
    passwordIsCorrect(username: string, password: string) : Promise<boolean>;

    // Auths
    createAuth(username: string, password: string): Promise<AuthData>;
    authIsValid(authToken: AuthToken): Promise<boolean>;
    deleteAuth(authToken: AuthToken): Promise<void>;
    listAuths(): Promise<Array<AuthData>>;

    // Posts
    createPost(feedItem: FeedItem): Promise<boolean>;

    // Feed
    getFeed(): Promise<Array<FeedItem>>
    clearFeed()
}

