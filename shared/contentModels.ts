
// Anything that can exist as a member of the feed is modelled as a FeedItem
// Anything that can exist as a visible user of the plaform is modelled as a Profile
// Account info INCLUDING sensitive info is modelled as a User
// Profile objects are a subset of their corresponding user.




export class Profile {
    constructor(
        public username: string,
        public profileName: string,
        public dateJoined: Date,
        public bioText?: string
    ) {}
};
export const asProfile = (x: any): Profile => ({ ...x });





export class User extends Profile {
    constructor(
        username: string,
        profileName: string,
        dateJoined: Date,
        public password: string
    ) { super(username, profileName, dateJoined); }
}; export const asUser = (x: any): User => ({ ...x });



export enum FeedItemTypes {
    Post
}


export class FeedItem {
    constructor(
        public type: FeedItemTypes,
        public text: string,
        public username: string,
    ) {}
}; export const asFeedItem = (x: any): FeedItem => ({ ...x });





export class Post extends FeedItem {
    constructor(
        text: string, 
        username: string,
        public date: Date,
        public score: number,
        public _id?: string,
    ) {
        super(FeedItemTypes.Post, text, username);

        if (typeof date === "string" && /^\d{4}-\d{2}-\d{2}T/.test(date)) {
            this.date = new Date(date);
        }
    }
}; export const asPost = (x: any): Post => ({ ...x });



type Feed = Array<FeedItem>;


// asX functions serve as type reinforcers and deserializers where needed.
export function asFeed(x: Array<any> | string): Feed {
    if (typeof x == "string") {
        return JSON.parse(x).map((obj: any) => {
            switch (obj.type) {
                case FeedItemTypes.Post: return new Post(obj.text,obj.username,obj.date,obj.score,obj._id);
            }   
        })
    } else {
        return Array.from(x).map((y) => asFeedItem(y))
    }
}

