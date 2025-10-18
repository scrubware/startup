import React from 'react';
import '../main.css';

import { NavLink } from 'react-router-dom';

export function Post() {
  return (
    <div className="flex border-2 border-gray-800 rounded-xl p-2">
        <div>
        <div className="flex">
            <img className="rounded-full w-[6mm] h-[6mm] mr-1" src="giamatti.jpg" alt="account icon"/>
            <p>mista fantastik <span className="dark:text-gray-600">@ 11:32am</span></p>
        </div>
        <p>my barber said 50% off like it was a deal. spun me around to the mirror and i look like Paul Giamatti.</p>
        </div>
        <div className="flex flex-col justify-center ml-2 mr-2">
            <button className="text-xs bg-yellow-45/30 hover:bg-yellow-60 hover:border-zinger hover:text-black rounded-full w-full h-[6mm] m-0.5 pl-2 pr-2 p-0 pb-0.5">^</button>
            <button className="text-xs bg-lime-45/30 hover:bg-lime-60 text-lime-60 hover:bg-zinger-alt hover:border-zinger-alt hover:text-black rounded-full w-full h-[6mm] m-0.5 pl-2 pr-2 p-0 pb-0.5">v</button>
        </div>
    </div>
  );
}

export function OwnedPost() {
  return (
    <div className="flex border-1 rounded-lg p-2">
        <div>
        <div className="flex">
            <img className="rounded-full w-[6mm] h-[6mm] mr-1" src="giamatti.jpg" alt="account icon"/>
            <p>mista fantastik <NavLink to="/account" className="dark:text-lime-60 dark:hover:text-white">(you)</NavLink> <span className="dark:text-gray-600">@ 11:32am</span></p>
        </div>
        <p>my barber said 50% off like it was a deal. spun me around to the mirror and i look like Paul Giamatti.</p>
        </div>
        <div className="flex flex-col w-1/6 justify-center ml-2 mr-2">
            <button className="text-xs bg-yellow-45/30 hover:bg-yellow-60 hover:border-yellow-60 hover:text-black rounded-full w-full h-[6mm] m-0.5 pl-2 pr-2 p-0 pb-0.5">private</button>
            <button className="text-xs bg-lime-45/30 text-lime-60 hover:bg-lime-60 hover:border-lime-60 hover:text-black rounded-full w-full h-[6mm] m-0.5 pl-2 pr-2 p-0 pb-0.5">delete</button>
        </div>
    </div>
  );
}