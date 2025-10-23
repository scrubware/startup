import React, { useState} from 'react';
import '../main.css';

import { Post, User } from "../objects"

function PostFactory(text, account) {
  return {
    content: text,
    account: account
  }
}

export function PostPage({username, feed}) {

  const [postContent, changePostContent] = useState('')

  function CreatePost() {
    feed.push(new Post(postContent, new User(username)))
  }

  function CreateDraft() {
    
  }

  return (
    <div className="w-[100%] flex flex-col items-center">
        <textarea value={postContent} onChange={(event) => {changePostContent(event.target.value)}} placeholder="What's on your mind?" className="w-full outline-1 rounded-lg p-2 bg-transparent" data-gramm="false"/>
        <div className="flex w-1/2 pt-2">
        <button onClick={CreatePost} className="border-2 hover:bg-yellow-60 hover:border-yellow-60 hover:text-black rounded-full w-[50%] m-1 p-0.3 pb-1">post</button>
        {/* <button onClick={CreateDraft} className="text-lime-60 border-2 hover:bg-lime-60 hover:border-lime-60 hover:text-black rounded-full w-[50%] m-1 p-0.3 pb-1">save draft</button> */}
        </div>
    </div>
  );
}