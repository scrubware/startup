
class Draft {
    text: string;
    user: User;

    constructor(text: string, user: User) {
        this.text = text;
        this.user = user;
    }
}

export class Post extends Draft {
  date: Date;
  constructor(text: string, user: User) {
    super(text,user)
    this.date = new Date();
  }
}

class Ad extends Draft {
    link_url: URL;
    constructor(text: string, user: Brand, link_url: URL) {
        super(text, user)
        this.link_url = link_url;
    }
}

export class User {
    username: string;

    constructor(username: string) {
        this.username = username;
    }
}

class Account extends User {
  posts: Post[] = [];
  drafts: Draft[] = [];

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
    user.drafts.push(new Draft(text, user));
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

function DraftComponent(d: Draft) {

}

function AdComponent(a: Ad) {

}

