import { useState } from 'react';
import '../main.css';

// import { NavLink, useNavigate } from 'react-router-dom';
import { RegistrationProgress } from './registrationProgress';
import { Input, InputSecure, Button, Subtext, textColor, buttonColor, inputColor, LabelledBox } from './input'

import { LoginRequest, LoginResult, RegisterRequest, RegisterResult } from '../../shared/api.js'
import * as React from 'react';


export function LoginPage({registrationProgress, changeRegistrationProgress, username, changeUsername, displayName, changeDisplayName, authStateFunction}) {

  // We use 'useState' so that components are automatically re-rendered on change.
  // Otherwise, components would stay static.

  const [usernameInputColor, changeUsernameInputColor] = useState(inputColor.yellow)
  const [usernameErrorMessage, changeUsernameErrorMessage] = useState('')

  const [password, changePassword] = useState('')
  const [passwordInputColor, changePasswordInputColor] = useState(inputColor.yellow)
  const [passwordErrorMessage, changePasswordErrorMessage] = useState('')

  const [loginErrorMessage, changeLoginErrorMessage] = useState('')

  const [displayNameInputColor, changeDisplayNameInputColor] = useState(inputColor.yellow)
  const [displayNameSubtext, changeDisplayNameSubtext] = useState('you can change this at any time')

  const validUsernameRegex = /^[a-zA-Z0-9-]+$/;
  const validPasswordLength = 8;

  const register = async () => {
    const response = await fetch('api/user/register', {
      method: 'post',
      body: JSON.stringify(new RegisterRequest(username,password,displayName)),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const status = response.status;
    if (status == 200) {
      const result: RegisterResult = await response.json();
      console.log(result)
      changeRegistrationProgress(3)
      authStateFunction(true)
    }
  }




  async function Login() {
    // We're using a flag here in case the user 
    // has forgotten multiple credentials
    let quit_early = false
    if (!username) {
      changeUsernameInputColor(inputColor.pink)
      changeUsernameErrorMessage('you forgot the username!')
      quit_early = true
    }
    if (!password) {
      changePasswordInputColor(inputColor.pink)
      changePasswordErrorMessage('you forgot the password!')
      quit_early = true
    }

    if (quit_early) return

    // Fetch
    const response = await fetch('api/user/login', {
      method: 'post',
      body: JSON.stringify(new LoginRequest(username,password)),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    // Do stuff
    const status = response.status;
    if (status == 200) {
      const result: LoginResult = await response.json();
      console.log(result)
      changeRegistrationProgress(3)
      authStateFunction(true)
    } else {
      changeUsernameInputColor(inputColor.pink)
      changeLoginErrorMessage('user not registerd!')
      quit_early = true
    }
  }




  function Register() {
    let quit_early = false
    if (!username) {
      changeUsernameInputColor(inputColor.pink)
      changeUsernameErrorMessage('username cannot be empty')
      quit_early = true
    }
    if (password.length < validPasswordLength) {
      changePasswordInputColor(inputColor.pink)
      changePasswordErrorMessage('password must be at least 8 characters')
      quit_early = true
    }
    if (!password) {
      changePasswordInputColor(inputColor.pink)
      changePasswordErrorMessage('password cannot be empty')
      quit_early = true
    }
    

    if (quit_early) return

    changeRegistrationProgress(1)
  }

  

  const ChangeUsername = (event) => {
    const name = event.target.value
    changeUsername(name)

    if (name && !validUsernameRegex.test(name)) {
      changeUsernameInputColor(inputColor.pink)
      changeUsernameErrorMessage('only a-z, 0-9, and dashes allowed')
    } else {
      changeUsernameInputColor(inputColor.yellow)
      changeUsernameErrorMessage('')
      changeLoginErrorMessage('')
    }
    
  }

  const ChangePassword = (event) => {
    const pass = event.target.value
    changePassword(pass)

    if (pass) {
      changePasswordInputColor(inputColor.yellow)
      changePasswordErrorMessage('')
    }
  }

  const [agreementOne,changeAgreeementOne] = useState(false)
  const [agreementTwo,changeAgreeementTwo] = useState(true)
  const [agreementThree,changeAgreeementThree] = useState(true)
  

  return (
    <div className="flex flex-col justify-center p-2">
      <div className="flex flex-col justify-center items-center">
          
          {registrationProgress == 0 && <>

            <h1 className="text-3xl dark:text-yellow-60 italic">welcome</h1>

            <Input value={username} onChange={ChangeUsername} placeholder={"username"} color={usernameInputColor}/>
            <Subtext color={textColor.pink} text={usernameErrorMessage}/>
            <InputSecure value={password} onChange={ChangePassword} placeholder={"password"} color={passwordInputColor}/>
            <Subtext color={textColor.pink} text={passwordErrorMessage}/>

            <Button onClick={Login} color={buttonColor.yellow}>login</Button>
            <Button onClick={Register} color={buttonColor.lime}>create account</Button>

            <Subtext color={textColor.pink} text={loginErrorMessage}/>
          </>}

          {registrationProgress == 1 && <>
            <Input value={displayName} onChange={(event) => {
              changeDisplayName(event.target.value)
              changeDisplayNameInputColor(inputColor.yellow)
              changeDisplayNameSubtext('you can change this at any time')
            }} placeholder={"display name"} color={displayNameInputColor}/>
            <Subtext color={textColor.yellow} text={displayNameSubtext}/>
            <Button color={buttonColor.lime} onClick={() => {
              if (!displayName) {
                changeDisplayNameInputColor(inputColor.pink)
                changeDisplayNameSubtext("alright well it can't be blank")
              } else {
                changeRegistrationProgress(2)
              }
            }}>continue</Button>
          </>}

          {registrationProgress == 2 && <>
            <p>before we wrap up your account...</p>

            <LabelledBox onChange={() => {changeAgreeementOne(!agreementOne)}}>i understand that zinger is an unforgiving pit of despair that will only cause me pain</LabelledBox>
            {/* <LabelledBox onChange={() => {changeAgreeementTwo(!agreementTwo)}}>entering this site makes you incredibly gassy!!!</LabelledBox> */}

            <Button 
              color={buttonColor.lime} 
              onClick={register}
              disabled={!(agreementOne && agreementTwo && agreementThree)}
            >continue</Button>
          </>}

          {registrationProgress == 3 && <>
            <h1 className="text-3xl dark:text-yellow-60 italic">welcome to zinger</h1>
            <p>check out the feed by pressing 'zinger' title in the top left</p>
            <p>create a post by pressing the plus icon in the top right</p>
            <p>or view your profile by pressing the account icon in the top right</p>
            <p>if you ever feel like logging out, you can do so using the button on the profile page</p>
          </>}

          {registrationProgress >= 1 && <RegistrationProgress progress={registrationProgress}/>}
      </div>
    </div>
  );
}