import React, { useState } from 'react';
import '../main.css';

import { NavLink } from 'react-router-dom';

export const VoteOption = {
  NONE : "none",
  DOWN : "down",
  UP : "up"
}

export function Post() {

  const defaultScore = 70;

  const [voteOption, changeVoteOption] = useState(VoteOption.NONE)
  const [voteScore, changeVoteScore] = useState(defaultScore)

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
                if (voteOption == VoteOption.UP) {
                  changeVoteOption(VoteOption.NONE)
                  changeVoteScore(defaultScore)
                } else {
                  changeVoteOption(VoteOption.UP)
                  changeVoteScore(defaultScore + 1)
                }
              }} 
              className={buttonCommon + (voteOption == VoteOption.UP ? " bg-yellow-60 text-black" : " bg-yellow-45/30 hover:bg-yellow-60 text-yellow-60")}
            >^</button>
            <button 
              onClick={() => {
                if (voteOption == VoteOption.DOWN) {
                  changeVoteOption(VoteOption.NONE)
                  changeVoteScore(defaultScore)
                } else {
                  changeVoteOption(VoteOption.DOWN)
                  changeVoteScore(defaultScore - 2)
                }
              }} 
              className={buttonCommon + (voteOption == VoteOption.DOWN ? " bg-lime-60 text-black" : " bg-lime-45/30 hover:bg-lime-60 text-lime-60")}
            >v</button>
        </div>
    </div>
  );
}

export function OwnedPost() {

  return (
    <div className="flex border-1 rounded-lg p-2 items-center">
        <div>
        <div className="flex">
            <img className="rounded-full w-[6mm] h-[6mm] mr-1" src="giamatti.jpg" alt="account icon"/>
            <p>mista fantastik <NavLink to="/account" className="dark:text-lime-60 dark:hover:text-white">(you)</NavLink> <span className="dark:text-gray-600">@ 11:32am</span></p>
        </div>
        <p>my barber said 50% off like it was a deal. spun me around to the mirror and i look like Paul Giamatti.</p>
        </div>
        <p className="text-yellow-95 m-3 text-2xl">70</p>
        <div className="flex flex-col w-1/6 justify-center mr-2">
            {/* <button className="text-xs bg-yellow-45/30 hover:bg-yellow-60 hover:border-yellow-60 hover:text-black rounded-full w-full h-[6mm] m-0.5 pl-2 pr-2 p-0 pb-0.5">private</button> */}
            <button className="text-xs bg-lime-45/30 text-lime-60 hover:bg-lime-60 hover:border-lime-60 hover:text-black rounded-full w-full h-[6mm] m-0.5 pl-2 pr-2 p-0 pb-0.5">delete</button>
        </div>
    </div>
  );
}

export function OwnedPostFactory(post) {

  return (<>
    <div className="flex border-1 rounded-lg p-2 items-center">

        <div className="grow">
          <div className="flex">
              <img className="rounded-full w-[6mm] h-[6mm] mr-1" src="giamatti.jpg" alt="account icon"/>
              <p>{post.username} <span className="dark:text-gray-600">@ {new Date(Date.parse(post.date)).toLocaleTimeString(undefined, { timeStyle: "short" })}</span></p>
          </div>
          <p>{post.text}</p>
        </div>
        {/* <p className="text-yellow-95 m-3 text-2xl">0</p> */}
        {/* <div className="flex flex-col w-1/6 justify-center mr-2">
            <button className="text-xs bg-yellow-45/30 hover:bg-yellow-60 hover:border-yellow-60 hover:text-black rounded-full w-full h-[6mm] m-0.5 pl-2 pr-2 p-0 pb-0.5">private</button>
            <button className="text-xs bg-lime-45/30 text-lime-60 hover:bg-lime-60 hover:border-lime-60 hover:text-black rounded-full w-full h-[6mm] m-0.5 pl-2 pr-2 p-0 pb-0.5">delete</button>
        </div> */}
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