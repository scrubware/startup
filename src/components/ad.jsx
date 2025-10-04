import React from 'react';
import '../main.css';

export function Ad() {
    return (
        <div className="border-1 rounded-lg p-2">
            <div className="flex">
                <img className="rounded-full w-[6mm] h-[6mm] mr-1" src="giamatti.jpg" alt="account icon"/>
                <p>PepsiCo <span className="dark:text-gray-600">Sponsered</span></p>
            </div>
            <p><a href="https://www.pepsi.com/" className="hover:text-zinger-alt">Drink the all-new Pepsi Plus!</a></p>
            <img className="p-4 w-full sm:w-[320px] sm:h-[320px] rounded-3xl" src="https://iconicmnl.com/wp-content/uploads/2021/11/Pepsi-1-1068x983.jpg"/>
        </div>
    );
}