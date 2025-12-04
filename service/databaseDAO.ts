import { asAuthData, AuthData, AuthToken } from "../shared/dataModels.js";
import { Profile, User, FeedItem, asProfile, asUser, asFeed, asFeedItem, Post } from "../shared/contentModels.js";

import { v4 as uuid } from 'uuid';
import { hash, compare } from 'bcrypt-ts';

import { MongoClient, Db, Collection, Document, ObjectId } from 'mongodb'
import config from './dbConfig.json' with { type: 'json' };
import { asProfileWithId, WithId } from "./serverModels.js";


export class DatabaseDAO {

    client: MongoClient;
    db: Db;
    users: Collection<Document>;
    auths: Collection<Document>;
    posts: Collection<Document>;


    async initialize() {

        console.log(config)

        const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

        this.client = new MongoClient(url);
        this.db = this.client.db('zinger');
        
        this.users = this.db.collection('users');
        this.auths = this.db.collection('auths');
        this.posts = this.db.collection('posts');

        try {
            await this.db.command({ ping: 1 });
            console.log(`DB connected to ${config.hostname}`);
        } catch (ex) {
            console.log(`Error with ${url} because ${ex.message}`);
            process.exit(1);
        }
    }

    // Users
    async createUser(username: string, password: string, displayName: string): Promise<Profile> {
        const hashedPassword = await hash(password, 10);
        console.log("DISPLAY NAME!!!!")
        console.log(displayName)
        const u = new User(username,displayName,new Date(),hashedPassword);
        this.users.insertOne(u);
        return asProfile(u);
    }
    async getUser(username: string): Promise<WithId<Profile>> {
        const query = {
            username: username
        };
        const found = await this.users.findOne(query);
        if (found == null) return null;
        delete found.password;
        return asProfileWithId(found);
    }
    async getUserFromAuth(authToken: string): Promise<WithId<Profile>> {
        const query = {
            authToken: authToken
        }
        const found = await this.auths.findOne(query);
        if (found == null) return null;
        return this.getUser(asAuthData(found).username);
    }
    async passwordIsCorrect(username: string, password: string): Promise<boolean> {
        const query = {
            username: username
        };
        const user: User = asUser(await this.users.findOne(query));
        return await compare(password, user.password);
    }
    async updateProfile(profile: Profile) {
        const query = {
            username: profile.username
        };
        this.users.findOneAndReplace(query, profile)
    }



    // Auths
    async createAuth(username: string, password: string): Promise<AuthData> {
        let auth: AuthData = new AuthData(username,uuid())
        this.auths.insertOne(auth);
        return auth;
    }
    async authIsValid(authToken: AuthToken): Promise<boolean> {
        return (await this.auths.findOne({authToken}) != null);
    }
    async deleteAuth(authToken: AuthToken): Promise<void> {
        this.auths.deleteOne({authToken})
    }



    // Content
    async createFeedItem(feedItem: FeedItem) {
        this.posts.insertOne(feedItem)
        console.log("creating feedItem: ", feedItem, " of type ", typeof feedItem)
    }
    async deleteFeedItem(_id: ObjectId) {
        console.log("trying delete...")
        console.log("found same id!: ",this.posts.findOne({ _id }))
        this.posts.deleteOne({ _id })
    }
    async getFeedItem(_id: ObjectId): Promise<FeedItem> {
        return asFeedItem(await this.posts.findOne({ _id }))
    }
    async getFeed(): Promise<Array<FeedItem>> {
        return asFeed(await this.posts.find().toArray())
    }
    async clearFeed() {
        this.posts.drop()
    }
    
}