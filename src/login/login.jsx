import React, { useState } from 'react';
import '../main.css';

import { NavLink } from 'react-router-dom';

export function LoginPage() {

  const [username, changeUsername] = useState('')
  const [password, changePassword] = useState('')

  function Login() {
    console.log(username)
    console.log(password)
  }

  function Register() {
    console.log('register attempted')
  }

  const ChangeUsername = (event) => {
    changeUsername(event.target.value)
  }

  const ChangePassword = (event) => {
    changePassword(event.target.value)
  }

  return (
    <div className="flex flex-col justify-center p-2">
    <div className="flex justify-center">
        <h1 className="text-3xl dark:text-yellow-60 italic">welcome</h1>
    </div>
    <div className="flex flex-col justify-center items-center">
        <input type="text" value={username} onChange={ChangeUsername} placeholder="username" className="pl-4 pb-3 rounded-full border-2 m-1 p-2 text-yellow-60 border-yellow-60"/>
        <input type="password" value={password} onChange={ChangePassword} placeholder="password" className="pl-4 pb-3 rounded-full border-2 m-1 p-2 text-yellow-60 border-yellow-60" />

        <button onClick={Login} className="border-2 hover:bg-yellow-60 hover:border-yellow-60 hover:text-black rounded-full w-3/5 m-1 p-0.3 pb-1 text-center">login</button>
        <button onClick={Register} className="border-2 hover:bg-lime-60 hover:border-lime-60 dark:text-lime-60 hover:text-black rounded-full w-3/5 m-1 p-0.3 pb-1 text-center">create account</button>

        {/* <div className="flex mt-4 items-center">
          <div className="bg-lime-60 border-2 border-lime-60 rounded-full p-2.5"></div>
          <div className="border-1 border-lime-60 h-0 w-10"></div>
          <div className="border-2 border-lime-60 rounded-full p-2.5"></div>
          <div className="border-1 border-lime-45 h-0 w-10"></div>
          <div className="border-2 border-lime-45 rounded-full p-2.5"></div>
        </div> */}
    </div>
    </div>
  );
}