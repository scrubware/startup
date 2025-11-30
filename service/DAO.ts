
import { FeedItem, Profile } from "../shared/models.js"
import { AuthData, AuthToken } from "../shared/api.js"

export interface DAO {
    
    initialize();

    // User
    createUser(username: string, password: string, displayName: string): Promise<Profile>;
    getUser(username: string): Promise<Profile>;
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

