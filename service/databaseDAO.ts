import { AuthData, AuthToken } from "../shared/api";
import { User, FeedItem } from "../shared/models";
import { DAO } from "./DAO";


import { v4 as uuid } from 'uuid';
import { hash, compare } from 'bcrypt-ts';

import { MongoClient } from 'mongodb'
import * as config from './dbConfig.json' with { type: 'json' };


// import config from './dbConfig.json'

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db('zinger');
const users = db.collection('users');
const auths = db.collection('auths');
const content = db.collection('content')

export class DatabaseDAO implements DAO {

    // Users
    createUser(username: string, password: string, displayName: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    getUser(username: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    passwordIsCorrect(username: string, password: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    // Auths
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

    // Content
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