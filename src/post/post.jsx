import React from 'react';
import '../main.css';

export function PostPage() {
  return (
    <div className="w-[100%] flex flex-col items-center">
        <textarea placeholder="What's on your mind?" className="w-full outline-1 rounded-lg p-2" data-gramm="false"></textarea>
        <div className="flex w-2/3 pt-2">
        <button className="border-2 hover:bg-zinger hover:border-zinger hover:text-black rounded-full grow m-1 p-0.3 pb-1">Post</button>
        <button className="border-2 hover:bg-zinger hover:border-zinger hover:text-black rounded-full grow m-1 p-0.3 pb-1">Save Draft</button>
        <button className="text-zinger-alt border-2 hover:bg-zinger-alt hover:border-zinger-alt hover:text-black rounded-full grow m-1 p-0.3 pb-1">Discard</button>
        </div>
    </div>
  );
}