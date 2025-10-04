import React from 'react';
import '../main.css';

export function Post() {
  return (
    <div className="flex border-1 rounded-lg p-2">
        <div>
        <div className="flex">
            <img className="rounded-full w-[6mm] h-[6mm] mr-1" src="giamatti.jpg" alt="account icon"/>
            <p>mista fantastik <span className="dark:text-gray-600">@ 11:32am</span></p>
        </div>
        <p>my barber said 50% off like it was a deal. spun me around to the mirror and i look like Paul Giamatti.</p>
        </div>
        <div className="flex flex-col justify-center ml-2 mr-2">
            <button className="text-xs border-2 hover:bg-zinger hover:border-zinger hover:text-black rounded-full w-full h-[6mm] m-0.5 pl-2 pr-2 p-0 pb-0.5">^</button>
            <button className="text-xs text-zinger-alt border-2 hover:bg-zinger-alt hover:border-zinger-alt hover:text-black rounded-full w-full h-[6mm] m-0.5 pl-2 pr-2 p-0 pb-0.5">v</button>
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
            <p>mista fantastik <a className="dark:text-zinger-alt dark:hover:text-white" href="account.html">(you)</a> <span className="dark:text-gray-600">@ 11:32am</span></p>
        </div>
        <p>my barber said 50% off like it was a deal. spun me around to the mirror and i look like Paul Giamatti.</p>
        </div>
        <div className="flex flex-col w-1/6 justify-center ml-2 mr-2">
            <button className="text-xs border-2 hover:bg-zinger hover:border-zinger hover:text-black rounded-full w-full h-[6mm] m-0.5 pl-2 pr-2 p-0 pb-0.5">private</button>
            <button className="text-xs text-zinger-alt border-2 hover:bg-zinger-alt hover:border-zinger-alt hover:text-black rounded-full w-full h-[6mm] m-0.5 pl-2 pr-2 p-0 pb-0.5">delete</button>
        </div>
    </div>
  );
}