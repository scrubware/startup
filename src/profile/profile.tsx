import React from 'react';
import '../main.css';

import { OwnedPostComponent } from "../components/postComponents"
import { Profile } from '../../shared/contentModels';

type ProfilePageArgs = {profile: Profile}
export function ProfilePage({profile}: ProfilePageArgs) {
  return (
    <div>
        <div className="flex flex-col items-center">
          <div className="w-full">
            <div className="flex flex-col items-center sm:items-start sm:flex-row">
              <div className="sm:w-2/3 pb-6 sm:pb-0 sm:pr-7">
                <div className="flex items-center">
                  <h1 className="text-3xl italic pb-2 pr-6">{profile.profileName}</h1>
                  {/* <button className="text-xs text-lime-60 bg-lime-45/30 hover:bg-lime-60 hover:text-black rounded-full w-auto h-1/2 pl-4 pr-4 p-1.5 pb-1.5">change profile name</button> */}
                </div>
                
                <p>Paul Edward Valentine Giamatti (/ˌdʒiːəˈmɑːti/ JEE-ə-MAH-tee; born June 6, 1967) is an American actor. His accolades include a Primetime Emmy Award and three Golden Globes, as well as nominations for two Academy Awards and a British Academy Film Award. </p>
              </div>
              <div className="flex flex-col w-3/5 sm:w-1/3">
                <img className="aspect-square rounded-2xl" src="giamatti.jpg"/>
                <div className="flex flex-col items-center">
                  <p className="w-fit text-gray-500">@{profile.username}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>

          {/* {feed.length > 0 && <>
            <h4 className="text-3xl italic mb-2 mt-10">posts:</h4>

            {{feed.map(item => OwnedPostFactory(item))} }

            <div className="flex justify-center mt-3">
              <p className="italic text-gray-600 text-xl">end of posts</p>
            </div>
          </>} */}

          {/* <h4 className="text-3xl italic mb-2 mt-10">drafts:</h4>

          <Draft/>

          <div className="flex justify-center mt-3">
            <p className="italic text-gray-600 text-xl">end of drafts</p>
          </div> */}

        </div>
    </div>
    );
}