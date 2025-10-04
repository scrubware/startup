import React from 'react';
import '../main.css';

import { OwnedPost, Post } from "../components/post"
import { Ad } from "../components/ad"

export function FeedPage() {
    return (
        <div>
            <Post/>
            <br/>
            <Post/>
            <br/>
            <Ad/>
            <br/>
            <OwnedPost/>
        </div>
    );
}