import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { LoginPage } from './login/login';
import { AccountPage } from './account/account';
import { PostPage } from './post/post';
import { FeedPage } from './feed/feed';

export default function App() {
  return (
    <BrowserRouter>
    
      <header className="pt-[2mm] pb-[2mm] fixed top-0 w-[calc(100%-10mm)] md:w-[calc(100%-(100%-45rem)+1px)] bg-gray-900">
        <div className="flex justify-between">
          <NavLink to="/feed">
            <p className="dark:text-zinger dark:hover:text-zinger-alt text-4xl sm:text-5xl italic">zinger</p>
          </NavLink>
          <div className="flex">
            <NavLink to="/post">
              <svg viewBox="0 0 24 24" fill="none" className="rounded w-[12mm] h-[12mm] sm:w-[16mm] sm:h-[16mm] stroke-zinger hover:stroke-zinger-alt pointer-events-none">
              <path id="Vector" d="M8 12H12M12 12H16M12 12V16M12 12V8M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </NavLink>
            <NavLink to="/account">
              <svg viewBox="0 0 24 24" fill="none" className="rounded w-[12mm] h-[12mm] sm:w-[16mm] sm:h-[16mm] stroke-zinger hover:stroke-zinger-alt pointer-events-none">
              <path id="Vector" d="M17.2166 19.3323C15.9349 17.9008 14.0727 17 12 17C9.92734 17 8.06492 17.9008 6.7832 19.3323M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </NavLink>
          </div>
        </div>
      </header>

{/* className="grow mt-14 sm:mt-18 flex items-center justify-center dark:text-zinger" */}
      <main className="grow mt-14 sm:mt-18 dark:text-zinger flex justify-center items-center">
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/account' element={<AccountPage />} />
          <Route path='/post' element={<PostPage />} />
          <Route path='/feed' element={<FeedPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      

      <footer class="flex justify-between dark:text-zinger mt-14 mb-1 scroll-mb-30">
        <p>&copy; tom baker</p>
        <div class="flex">
          <a href="https://github.com/scrubware/startup">github</a>

          <NavLink to="/"><p className="dark:text-zinger-alt pl-3">logout</p></NavLink>
        </div>
      </footer>

    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}