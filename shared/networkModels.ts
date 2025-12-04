
import { asFeedItem, FeedItem } from "./contentModels";

export enum NetworkEvent {
    AddToFeed,
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
        return JSON.parse(str);
    }
    event(): NetworkEvent { return this._event; }
}
