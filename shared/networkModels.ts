
import { asFeed, asFeedItem, Feed, FeedItem } from "./contentModels.js";

export enum NetworkEvent {
    AddToFeed,
    RefreshFeed,
    //Post
}

export interface NetworkMessage {
    serialize(): Promise<string>;
    event(): NetworkEvent; 
}


export class NetworkObject {
    constructor(
        public readonly event: NetworkEvent,
        public readonly msg: string
    ) {}
}

// export class PostSNM implements NetworkMessage {
//     _event: NetworkEvent = NetworkEvent.Post;

//     constructor(
//         public readonly feedItem: FeedItem
//     ) {}

//     async serialize(): Promise<string> {
//         return JSON.stringify(this.feedItem)
//     }
//     static async deserialize(str: string): Promise<NetworkObject> {
//         return JSON.parse(str);
//     }
//     event(): NetworkEvent { return this._event; }
// }

export class AddToFeedCNM implements NetworkMessage {

    _event: NetworkEvent = NetworkEvent.AddToFeed;

    constructor(
        public readonly feedItem: FeedItem
    ) {}

    async serialize(): Promise<string> {
        return JSON.stringify(this.feedItem)
    }
    static async deserialize(str: string): Promise<Object> {
        return asFeedItem(str);
    }
    event(): NetworkEvent { return this._event; }
}

export class RefreshFeedCNM implements NetworkMessage {

    _event: NetworkEvent = NetworkEvent.RefreshFeed;

    constructor(
        public readonly feed: Feed
    ) {}

    async serialize(): Promise<string> {
        return JSON.stringify(this.feed)
    }
    static async deserialize(str: string): Promise<Object> {
        return asFeed(str);
    }
    event(): NetworkEvent { return this._event; }
}
