import React from 'react';
import '../main.css';

export function Feed() {
    return (
        <main className="grow mt-14 sm:mt-18 text-zinger">
            <div className="border-1 rounded-lg p-2">
                <img style="display:inline-block" className="rounded-full w-[6mm] h-[6mm] mr-1" src="giamatti.jpg" alt="account icon"/>
                <p style="display:inline-block;padding:0;margin:0">josh lee <span className="dark:text-gray-600">@ 10:45am</span></p>
                <p style="padding:0;margin:0">What's a lion's favorite street? MANE street!</p>
            </div>

            <br/>

            <div className="border-1 rounded-lg p-2">
                <img style="display:inline-block" className="rounded-full w-[6mm] h-[6mm] mr-1" src="giamatti.jpg" alt="account icon"/>
                <p style="display:inline-block;padding:0;margin:0">mr. mark swelterly <span className="dark:text-gray-600">@ 3:21pm</span></p>
                <p style="padding:0;margin:0">It was the bestchershire of times, and it was the worstchershire of times.</p>
            </div>

            <br/>

            <div className="border-1 rounded-lg p-2">
            <img style="display:inline-block" className="rounded-full w-[6mm] h-[6mm] mr-1" src="giamatti.jpg" alt="account icon"/>
            <p style="display:inline-block;padding:0;margin:0">PepsiCo <span className="dark:text-gray-600">Sponsered</span></p>
            <p><a href="https://www.pepsi.com/" className="hover:text-zinger-alt">Drink the all-new Pepsi Plus!</a></p>
            <img className="p-4 w-full sm:w-[320px] sm:h-[320px] rounded-3xl" src="https://iconicmnl.com/wp-content/uploads/2021/11/Pepsi-1-1068x983.jpg"/>
            </div>

            <br/>

            <div className="border-1 rounded-lg p-2">
                <img style="display:inline-block" className="rounded-full w-[6mm] h-[6mm] mr-1" src="giamatti.jpg" alt="account icon"/>
                <p style="display:inline-block;padding:0;margin:0">mista fantastik <a className="dark:text-zinger-alt dark:hover:text-white" href="account.html">(you)</a> <span className="dark:text-gray-600">@ 11:32am</span></p>
                <p style="padding:0;margin:0">my barber said 50% off like it was a deal. spun me around to the mirror and i look like Paul Giamatti.</p>
            </div>
        </main>
    );
}