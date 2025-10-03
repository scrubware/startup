import React from 'react';
import '../main.css';

export function Login() {
  return (
    <main className="grow mt-14 sm:mt-18 flex items-center justify-center dark:text-zinger">
      <div className="flex flex-col justify-center p-2">
        <div className="flex justify-center">
          <h1 className="text-3xl dark:text-zinger italic">welcome</h1>
        </div>
        <form method="get" action="feed.html" className="flex flex-col justify-center items-center">
          <div className="border-2 rounded-full p-2 m-2 mb-1">
            <span>@</span>
            <input type="text" className="text-zinger2" placeholder="username" />
          </div>
          <div className="border-2 rounded-full p-2 m-2 mt-1">
            <span>🔒</span>
            <input type="password" placeholder="password" />
          </div>

          <button type="submit" className="border-2 hover:bg-zinger hover:border-zinger hover:text-black rounded-full w-3/5 m-1 p-0.3 pb-1">login</button>
          <button type="submit" className="border-2 hover:bg-zinger-alt hover:border-zinger-alt dark:text-zinger-alt hover:text-black rounded-full w-3/5 m-1 p-0.3 pb-1">create account</button>
        </form>
      </div>
    </main>
  );
}