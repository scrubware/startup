
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
}; export const asProfile = (x: any): Profile => ({ ...x });





export class User extends Profile {
    constructor(
        username: string,
        profileName: string,
        dateJoined: Date,
        public password: string
    ) { super(username, profileName, dateJoined); }
}; export const asUser = (x: any): User => ({ ...x });





export class FeedItem {
    constructor(
        public text: string,
        public username: string
    ) {}
}; export const asFeedItem = (x: any): FeedItem => ({ ...x });





export class Post extends FeedItem {
    constructor(
        text: string, 
        username: string,
        public date: Date,
    ) { super(text,username); }
}; export const asPost = (x: any): Post => ({ ...x });





type Feed = Array<Post>;

export function asFeed(x): Feed {
    console.log("feeding: ",x)
    return Array.from(x).map((y) => asPost(y))
}
