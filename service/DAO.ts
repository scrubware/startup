
import { FeedItem, Profile } from "../shared/contentModels.js"
import { AuthData, AuthToken } from "../shared/dataModels.js"
import { ObjectId } from "mongodb";
import { WithId } from "./serverModels.js";

export interface DAO {
    
    initialize();

    // User
    createUser(username: string, password: string, displayName: string): Promise<Profile>;
    getUser(username: string): Promise<Profile>;
    getUserFromAuth(authToken: string): Promise<WithId<Profile>>;
    passwordIsCorrect(username: string, password: string) : Promise<boolean>;
    updateProfile(profile: Profile);

    // Auths
    createAuth(username: string, password: string): Promise<AuthData>;
    authIsValid(authToken: AuthToken): Promise<boolean>;
    deleteAuth(authToken: AuthToken): Promise<void>;

    // Posts
    createFeedItem(feedItem: FeedItem);
    deleteFeedItem(id: ObjectId);
    getFeedItem(id: ObjectId): Promise<FeedItem> ;

    // Feed
    getFeed(): Promise<Array<FeedItem>>
    clearFeed()
}

