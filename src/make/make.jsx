import React, { useState} from 'react';
import '../main.css';

import { Post, User } from "../../shared/models.js"
import { MakeFeedItemRequest } from '../../shared/api.js';
import { useNavigate } from "react-router-dom";

function PostFactory(text, account) {
  return {
    content: text,
    account: account
  }
}

export function MakePage({username, feed}) {

  const navigate = useNavigate();

  const [postContent, changePostContent] = useState('')

  async function CreatePost() {
    //feed.push(new Post(postContent, new User(username)))

    console.log("sending!")

    const response = await fetch('api/content/make', {
      method: 'post',
      body: JSON.stringify(new MakeFeedItemRequest(new Post(postContent, username))),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    console.log("post")

    if (response.status == 200) {
      console.log("trying")
      navigate("/feed")
    } else {
      navigate("/feed")
    }
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