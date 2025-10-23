import React from 'react';
import '../main.css';

import { OwnedPost, OwnedPostFactory, Post } from "../components/post"
import { Ad } from "../components/ad"

export function FeedPage({feed}) {
    return (
        <div className="grow">
            {/* <Post/>
            <br/>
            <Post/>
            <br/>
            <Ad/>
            <br/>
            <OwnedPost/> */}
            {feed.length > 0 ? feed.map(item => OwnedPostFactory(item)) : <p>nothing here yet... maybe you ought to make the first post?</p>}
        </div>
    );
}