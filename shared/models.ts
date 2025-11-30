
// Anything that can exist as a member of the feed is modelled as a FeedItem
// Anything that can exist as a visible user of the plaform is modelled as a Profile
// Account info INCLUDING sensitive info is modelled as a User
// Profile objects are a subset of their corresponding user.

export class Profile {
    username: string;
    profileName: string;
    dateJoined: Date;

    constructor(username: string, profileName: string, dateJoined: Date) {
        this.username = username;
        this.profileName = profileName;
        this.dateJoined = dateJoined;
    }
}

export function asProfile(x): Profile {
    return {
        username: x.username,
        profileName: x.profileName,
        dateJoined:x.dateJoined
    };
}

export class User extends Profile {
    //phoneNumber: string;
    password: string;
    //email: string | null;

    constructor(username: string, password: string, profileName: string, dateJoined: Date) {
        super(username, profileName, dateJoined);
        this.password = password;
    }
}

export function asUser(x): User {
    return {
        username: x.username,
        profileName: x.profileName,
        dateJoined: x.dateJoined,
        password: x.password,
    }
}


export class FeedItem {
    text: string;
    username: string;

    constructor(text: string, username: string) {
        this.text = text;
        this.username = username;
    }
}

export function asFeedItem(x): FeedItem {
    return {
        text: x.text,
        username: x.username,
    }
}

export class Post extends FeedItem {
  date: Date;
  constructor(text: string, username: string) {
    super(text,username)
    this.date = new Date();
  }
}

export function asPost(x): Post {
    return {
        text: x.text,
        username: x.username,
        date: x.date
    }
}


type Feed = Array<Post>;

export function asFeed(x): Feed {
    console.log("feeding: ",x)
    return Array.from(x).map((y) => asPost(y))
}

// export class Ad extends FeedItem {
//     link_url: URL;
//     constructor(text: string, user: Brand, link_url: URL) {
//         super(text, user)
//         this.link_url = link_url;
//     }
// }



// class Account extends User {
//   posts: Post[] = [];
//   drafts: FeedItem[] = [];

//   constructor(username: string) {
//     super(username)
//   }
// }

// class Brand extends User {
//     ads: Ad[] = [];

//     constructor(username: string) {
//         super(username)
//     }
// }


// function SaveDraft(text: string, user: Account) {
//     user.drafts.push(new FeedItem(text, user));
// }

// function SendPost(text: string, user: Account) {
//     let p: Post = new Post(text,user);
//     user.posts.push(p);
//     let fjson: string | null = localStorage.getItem('feed')

//     let f: Array<Post>
//     if (fjson != null) {
//         f = JSON.parse(fjson);
//     } else {
//         f = new Array<Post>();
//     }

//     f.push(p)

//     fjson = JSON.stringify(f)

//     localStorage.setItem('feed',fjson)
// }

// function SendAd(text: string, user: Brand) {

// }

function PostComponent(p: Post) {

}

function OwnedPostComponent(p: Post) {

}

function DraftComponent(d: FeedItem) {

}

// function AdComponent(a: Ad) {

// }

