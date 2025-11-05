
// Anything that can exist as a member of the feed is modelled as a FeedItem
// Anything that can exist as a visible user of the plaform is modelled as a Profile
// Account info INCLUDING sensitive info is modelled as a User
// Profile objects are a subset of their corresponding user.

class UserDataCommon {
    username: string;
    profileName: string;
    dateJoined: Date;

}

export class User extends UserDataCommon {
    password: string;
    phoneNumber: string;
    email: string;

    constructor(username: string) {
        super();
        this.username = username;
    }
}

export class Profile extends UserDataCommon {
    
}


export class FeedItem {
    text: string;
    user: User;

    constructor(text: string, user: User) {
        this.text = text;
        this.user = user;
    }
}

export class Post extends FeedItem {
  date: Date;
  constructor(text: string, user: User) {
    super(text,user)
    this.date = new Date();
  }
}

export class Ad extends FeedItem {
    link_url: URL;
    constructor(text: string, user: Brand, link_url: URL) {
        super(text, user)
        this.link_url = link_url;
    }
}



class Account extends User {
  posts: Post[] = [];
  drafts: FeedItem[] = [];

  constructor(username: string) {
    super(username)
  }
}

class Brand extends User {
    ads: Ad[] = [];

    constructor(username: string) {
        super(username)
    }
}


function SaveDraft(text: string, user: Account) {
    user.drafts.push(new FeedItem(text, user));
}

function SendPost(text: string, user: Account) {
    let p: Post = new Post(text,user);
    user.posts.push(p);
    let fjson: string | null = localStorage.getItem('feed')

    let f: Array<Post>
    if (fjson != null) {
        f = JSON.parse(fjson);
    } else {
        f = new Array<Post>();
    }

    f.push(p)

    fjson = JSON.stringify(f)

    localStorage.setItem('feed',fjson)
}

function SendAd(text: string, user: Brand) {

}

function PostComponent(p: Post) {

}

function OwnedPostComponent(p: Post) {

}

function DraftComponent(d: FeedItem) {

}

function AdComponent(a: Ad) {

}

