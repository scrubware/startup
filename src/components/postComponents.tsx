import React, { useState } from 'react';
import '../main.css';

import { NavLink } from 'react-router-dom';
import { Post } from '../../shared/contentModels';

export const VoteOption = {
  NONE : "none",
  DOWN : "down",
  UP : "up"
}

export function PostFactory(post: Post, onUpvote: Function, onDownvote: Function) {

  const [voteOption, changeVoteOption] = useState(VoteOption.NONE)
  const [voteScore, changeVoteScore] = useState(post.score)

  const buttonCommon = "text-xs hover:text-black rounded-full w-full h-[6mm] m-0.5 pl-2 pr-2 p-0 pb-0.5"

  return (
    <div className="flex border-2 border-gray-800 rounded-xl p-2 items-center">
        <div>
        <div className="flex">
            <img className="rounded-full w-[6mm] h-[6mm] mr-1" src="giamatti.jpg" alt="account icon"/>
            <p>mista fantastik <span className="dark:text-gray-600">@ 11:32am</span></p>
        </div>
        <p>my barber said 50% off like it was a deal. spun me around to the mirror and i look like Paul Giamatti.</p>
        </div>
        <p className="text-yellow-95 m-3 text-2xl">{voteScore}</p>
        <div className="flex flex-col justify-center mr-2">
            <button 
              onClick={() => {
                onUpvote()
                if (voteOption == VoteOption.UP) {
                  changeVoteOption(VoteOption.NONE)
                  changeVoteScore(post.score)
                } else {
                  changeVoteOption(VoteOption.UP)
                  changeVoteScore(post.score + 1)
                }
              }} 
              className={buttonCommon + (voteOption == VoteOption.UP ? " bg-yellow-60 text-black" : " bg-yellow-45/30 hover:bg-yellow-60 text-yellow-60")}
            >^</button>
            <button 
              onClick={() => {
                onDownvote()
                if (voteOption == VoteOption.DOWN) {
                  changeVoteOption(VoteOption.NONE)
                  changeVoteScore(post.score)
                } else {
                  changeVoteOption(VoteOption.DOWN)
                  changeVoteScore(post.score - 2)
                }
              }} 
              className={buttonCommon + (voteOption == VoteOption.DOWN ? " bg-lime-60 text-black" : " bg-lime-45/30 hover:bg-lime-60 text-lime-60")}
            >v</button>
        </div>
    </div>
  );
}

export function OwnedPostFactory(post: Post, onPrivate: Function, onDelete: Function) {

  console.log("factorizing: ", post)

  return (<>
    <div className="flex border-1 rounded-lg p-2 items-center">

        <div className="grow">
          <div className="flex">
              <img className="rounded-full w-[6mm] h-[6mm] mr-1" src="giamatti.jpg" alt="account icon"/>
              <p>{post.username} {post.date && <span className="dark:text-gray-600">@ {post.date.toLocaleTimeString(undefined, { timeStyle: "short" })}</span>}</p>
          </div>
          <p>{post.text}</p>
        </div>
        <p className="text-yellow-95 m-3 text-2xl">0</p>
        <div className="flex flex-col w-1/6 justify-center mr-2">
            <button className="text-xs bg-yellow-45/30 hover:bg-yellow-60 hover:border-yellow-60 hover:text-black rounded-full w-full h-[6mm] m-0.5 pl-2 pr-2 p-0 pb-0.5" onClick={() => onPrivate()}>private</button>
            <button className="text-xs bg-lime-45/30 text-lime-60 hover:bg-lime-60 hover:border-lime-60 hover:text-black rounded-full w-full h-[6mm] m-0.5 pl-2 pr-2 p-0 pb-0.5" onClick={() => onDelete()}>delete</button>
        </div>
    </div>
    <br/>
  </>);
}

export function Draft() {
  return (
    <div className="flex border-1 rounded-lg p-2 items-center">
        <div>
        <div className="flex">
            <img className="rounded-full w-[6mm] h-[6mm] mr-1" src="giamatti.jpg" alt="account icon"/>
            <p>mista fantastik <NavLink to="/account" className="dark:text-lime-60 dark:hover:text-white">(you)</NavLink> <span className="dark:text-gray-600">drafted @ 11:32am on wednesday</span></p>
        </div>
        <p>my barber said 50% off like it was a deal. spun me around to the mirror and i look like Paul Giamatti.</p>
        </div>
        <div className="flex flex-col w-1/6 justify-center ml-2 mr-2">
            <button className="text-xs bg-yellow-45/30 hover:bg-yellow-60 hover:border-yellow-60 hover:text-black rounded-full w-full h-[6mm] m-0.5 pl-2 pr-2 p-0 pb-0.5">post</button>
            <button className="text-xs bg-lime-45/30 text-lime-60 hover:bg-lime-60 hover:border-lime-60 hover:text-black rounded-full w-full h-[6mm] m-0.5 pl-2 pr-2 p-0 pb-0.5">delete</button>
        </div>
    </div>
  );
}