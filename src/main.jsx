import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { LoginPage } from './login/login';
import { AccountPage } from './account/account';
import { PostPage } from './post/post';
import { FeedPage } from './feed/feed';

import { AuthState } from './login/auth' 

export default function App() {

  const [authState, setAuthState] = React.useState(false);

  const blurbs = [
    ["the worst app since twitter"],
    ["at least we're not reddit"],
    ["somehow more political than bluesky"]
  ]

  return (
    <BrowserRouter>
    
      <header className="pt-[2mm] pb-[2mm] fixed top-0 w-[calc(100%-10mm)] md:w-[calc(100%-(100%-45rem)+1px)] bg-gray-900">
        <div className="flex justify-between">
          <div className="flex items-center">
          { authState === AuthState.AUTHORIZED || true ? 
            <NavLink to="/feed">
              <p className="dark:text-yellow-60 dark:hover:text-lime-60 text-4xl sm:text-5xl italic">zinger</p>
            </NavLink> :
            <p className="dark:text-yellow-60 text-4xl sm:text-5xl italic">zinger</p>
          }
          <p className="italic text-lime-60 ml-2 mt-4">the worst app since twitter</p>
          </div>
          <div className="flex">
            <NavLink to="/post" className="stroke-yellow-60 hover:stroke-lime-60">
              <svg viewBox="0 0 24 24" fill="none" className="rounded w-[12mm] h-[12mm] sm:w-[16mm] sm:h-[16mm] pointer-events-none">
              <path id="Vector" d="M8 12H12M12 12H16M12 12V16M12 12V8M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </NavLink>
            <NavLink to="/account" className="stroke-yellow-60 hover:stroke-lime-60">
              <svg viewBox="0 0 24 24" fill="none" className="rounded w-[12mm] h-[12mm] sm:w-[16mm] sm:h-[16mm] pointer-events-none">
              <path id="Vector" d="M17.2166 19.3323C15.9349 17.9008 14.0727 17 12 17C9.92734 17 8.06492 17.9008 6.7832 19.3323M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </NavLink>
          </div>
        </div>
      </header>

      
      <main className="grow mt-14 sm:mt-18 dark:text-yellow-60 flex justify-center items-center">
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/account' element={<AccountPage />} />
          <Route path='/post' element={<PostPage />} />
          <Route path='/feed' element={<FeedPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      

      <footer className="flex justify-between dark:text-yellow-60 mt-14 mb-1 scroll-mb-30">
        <p>&copy; tom baker</p>
        <div className="flex">
          <a href="https://github.com/scrubware/startup" className="hover:text-white">github</a>

          <NavLink to="/"><p className="dark:text-lime-60 hover:text-white ml-3">logout</p></NavLink>
        </div>
      </footer>

    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}