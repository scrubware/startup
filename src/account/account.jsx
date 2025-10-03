import React from 'react';
import '../main.css';

export function Account() {
  return (
    <main className="grow mt-14 sm:mt-18 text-zinger">
        <div className="flex flex-col items-center">
          <div className="w-full">
            <div className="flex flex-col items-center sm:items-start sm:flex-row">
              <div className="sm:w-2/3 pb-6 sm:pb-0 sm:pr-7">
                <div className="flex items-center">
                  <h1 className="text-3xl italic pb-2 pr-6">mista fantastik</h1>
                  <button className="text-xs text-zinger-alt border-2 hover:bg-zinger-alt hover:border-zinger-alt hover:text-black rounded-full w-auto h-1/2 m-1 pl-2 pr-2 p-0 pb-0.5">change username</button>
                </div>
                
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </div>
              <div className="flex flex-col w-3/5 sm:w-1/3">
                <img className="aspect-square rounded-2xl" src="giamatti.jpg"/>
                <div className="flex flex-col items-center">
                  <p className="w-fit text-gray-500">@mista-fantastik</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>

          <h4 className="text-3xl italic mb-2 mt-10">posts:</h4>

          <div className="flex border-1 rounded-lg p-2">
              <div>
              <img style="display:inline-block" className="rounded-full w-[6mm] h-[6mm] mr-1" src="giamatti.jpg" alt="account icon"/>
              <p style="display:inline-block;padding:0;margin:0">mista fantastik <a className="dark:text-zinger-alt dark:hover:text-white" href="account.html">(you)</a> <span className="dark:text-gray-600">@ 11:32am</span></p>
              <p style="padding:0;margin:0">my barber said 50% off like it was a deal. spun me around to the mirror and i look like Paul Giamatti.</p>
              </div>
              <div className="flex flex-col w-1/5 justify-center ml-2 mr-2">
                <button className="text-xs text-zinger-alt border-2 hover:bg-zinger-alt hover:border-zinger-alt hover:text-black rounded-full w-full h-[6mm] m-0.5 pl-2 pr-2 p-0 pb-0.5">delete</button>
                <button className="text-xs border-2 hover:bg-zinger hover:border-zinger hover:text-black rounded-full w-full h-[6mm] m-0.5 pl-2 pr-2 p-0 pb-0.5">private</button>
              </div>
          </div>

          <div className="flex justify-center mt-3">
            <p className="italic text-gray-600 text-xl">end of posts</p>
          </div>

        </div>
    </main>
    );
}