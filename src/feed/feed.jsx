import React from 'react';
import '../main.css';

import { OwnedPost, OwnedPostFactory, Post } from "../components/post"
import { Ad } from "../components/ad"

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function FeedPage({feed}) {

    const urlstr = () => {
        return `https://cataas.com/cat/says/no%20posts%20yet%20%3A%2F?type=square&font=Times%20New%20Roman&fontSize=25&fontColor=%23fff&fontBackground=%23000000&t=${Date.now()}`;
    }

    const [url, setUrl] = useState(urlstr())

    const location = useLocation();

    useEffect(() => {
        setUrl(urlstr());
    }, [location]);

    function GetNoPostsCat() {
       return (
        <div className="flex p-4 sm:p-0 items-center justify-center">
            <img src={url} className="w-full sm:w-2/3 rounded-xl"/>
        </div>
       )
    }

    return (
        <div className="grow">
            {/* <Post/>
            <br/>
            <Post/>
            <br/>
            <Ad/>
            <br/>
            <OwnedPost/> */}
            {feed.length > 0 ? feed.map(item => OwnedPostFactory(item)) : GetNoPostsCat() }
            
        </div>
    );
}