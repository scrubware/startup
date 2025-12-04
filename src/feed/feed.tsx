import React from 'react';
import '../main.css';

import { OwnedPostComponent, PostComponent } from "../components/postComponents.js"
import { asFeed, Feed, FeedItem } from "../../shared/contentModels.js"

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DeleteFeedItemRequest } from '../../shared/apiModels.js';
import { AddToFeedCNM, NetworkEvent } from '../../shared/networkModels.js';

export function FeedPage({cachedProfile, networkHandler}) {

    const [feed, changeFeed] = useState([])

    const urlstr = () => {
        return `https://cataas.com/cat/says/no%20posts%20yet%20%3A%2F?type=square&font=Times%20New%20Roman&fontSize=25&fontColor=%23fff&fontBackground=%23000000&t=${Date.now()}`;
    }

    const [url, setUrl] = useState(urlstr())

    const location = useLocation();

    async function UpdateFeed() {
        const response = await fetch('api/content/feed', {
            method: 'get',
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        })

        if (response.status == 200) {
            changeFeed(asFeed(await response.text()))
            console.log("objectified output:")
            console.log(feed);
        }
    }

    useEffect(() => {
        function handleAddToFeed(obj: FeedItem) {
            changeFeed(fd => [obj, ...fd]);
        }

        function handleRefreshFeed(obj: Feed) {
            changeFeed(obj)
        }

        networkHandler.registerEventListener(NetworkEvent.AddToFeed, handleAddToFeed);
        networkHandler.registerEventListener(NetworkEvent.RefreshFeed, handleRefreshFeed);

        return () => {
            networkHandler.unregisterEventListener(NetworkEvent.AddToFeed, handleAddToFeed);
            networkHandler.unregisterEventListener(NetworkEvent.RefreshFeed, handleRefreshFeed);
        };
    }, [networkHandler]);

    useEffect(() => {
        setUrl(urlstr());
        UpdateFeed();
    }, [location]);

    function GetNoPostsCat() {
       return (
        <div className="flex p-4 sm:p-0 items-center justify-center">
            <img src={url} className="w-full sm:w-2/3 rounded-xl"/>
        </div>
       )
    }

    async function onPrivate(id) {

    }

    async function onDelete(id) {
        const response = await fetch('api/content/delete', {
            method: 'delete',
            body: JSON.stringify(new DeleteFeedItemRequest(id)),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        })

        if (response.status == 200) {
            UpdateFeed();
        }
    }

    async function onUpvote(id) {

    }

    async function onDownvote(id) {

    }

    // function GetElementForItem(item) {
    //     if (item.username == cachedProfile.username) {
    //         console.log("built owned post")
    //         return OwnedPostFactory(item, onPrivate, onDelete)
    //     } else {
    //         console.log("build NOT OWNED post")
    //         return PostFactory(item, onUpvote, onDownvote)
    //     } 
    // }

    return (
        <div className="grow">
            {feed.length > 0 ? 
                feed.map((item, index) => (
                    <React.Fragment key={item._id || index}>
                    {item.username === cachedProfile.username ? 
                        <OwnedPostComponent post={item} onPrivate={onPrivate} onDelete={onDelete} /> :
                        <PostComponent post={item} onUpvote={onUpvote} onDownvote={onDownvote} />
                    }
                    </React.Fragment>
                )) : GetNoPostsCat()
            }
        </div>
    );
}