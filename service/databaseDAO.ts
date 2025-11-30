import { AuthData, AuthToken } from "../shared/api";
import { Profile, User, FeedItem, asProfile, asUser } from "../shared/models.js";
import { DAO } from "./DAO";


import { v4 as uuid } from 'uuid';
import { hash, compare } from 'bcrypt-ts';

import { MongoClient } from 'mongodb'
import config from './dbConfig.json' with { type: 'json' };


export class DatabaseDAO implements DAO {

    client: MongoClient;
    db;
    users;
    auths;
    content;


    async initialize() {

        console.log(config)

        const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

        this.client = new MongoClient(url);
        this.db = this.client.db('zinger');
        
        this.users = this.db.collection('users');
        this.auths = this.db.collection('auths');
        this.content = this.db.collection('content')

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
        const u = new User(username,hashedPassword,displayName,new Date());
        this.users.insertOne(u);
        return asProfile(u);
    }
    async getUser(username: string): Promise<Profile> {
        const query = {
            username: username
        };
        const found = await this.users.findOne(query);
        if (found == null) return null;
        return asProfile(found);
    }
    async passwordIsCorrect(username: string, password: string): Promise<boolean> {
        const query = {
            username: username
        };
        const user: User = asUser(await this.users.findOne(query));
        return await compare(password, user.password);
    }

    // Auths
    async createAuth(username: string, password: string): Promise<AuthData> {
        throw new Error("Method not implemented.");
    }
    async authIsValid(authToken: AuthToken): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async deleteAuth(authToken: AuthToken): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async listAuths(): Promise<Array<AuthData>> {
        throw new Error("Method not implemented.");
    }

    // Content
    async createPost(feedItem: FeedItem): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async getFeed(): Promise<Array<FeedItem>> {
        throw new Error("Method not implemented.");
    }
    async clearFeed() {
        throw new Error("Method not implemented.");
    }
    
}