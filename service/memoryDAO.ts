

import type { DAO } from "./DAO.js"
import { AuthData, AuthToken } from '../shared/api.js'
import { User, FeedItem  } from "../shared/models.js"

import { v4 as uuid } from 'uuid';
import { hash, compare } from 'bcrypt-ts';

export class MemoryDAO implements DAO {
    users: User[] = []
    auths: AuthData[] = []
    posts: FeedItem[] = []



    // User
    async createUser(username:string, password:string, displayName:string): Promise<User> {
        const passwordHash = await hash(password, 10);
        let user: User = new User(username, passwordHash, displayName, new Date())
        this.users.push(user);
        return user;
    }

    async getUser(username: string): Promise<User> {
        return this.users.find(user => user.username == username) || null;
    }

    async passwordIsCorrect(username: string, password: string): Promise<boolean> {
        return await compare(password,(await this.getUser(username)).password)
    }



    // Auth
    async createAuth(username: string): Promise<AuthData> {
        let auth: AuthData = {username, authToken: uuid()}
        this.auths.push(auth);
        return auth;
    }
    async authIsValid(authToken: AuthToken): Promise<boolean> {
        let flag: boolean = false
        this.auths.forEach((authData) => {
            if (authData.authToken == authToken) {
                flag = true;
                return;
            }
        })
        return flag;
    }
    async deleteAuth(authToken: AuthToken): Promise<void> {
        for (let i = this.auths.length - 1; i >= 0; i--) {
            if (this.auths[i].authToken == authToken) {
                this.auths.splice(i, 1);
                break;
            }
        }
    }

    async listAuths(): Promise<Array<AuthData>> {
        return this.auths;
    }



    // Posts
    async createPost(feedItem: FeedItem): Promise<boolean> {
        this.posts.push(feedItem)
        return true;
    }


    // Feed
    async getFeed(): Promise<Array<FeedItem>> {
        return this.posts;
    }
}