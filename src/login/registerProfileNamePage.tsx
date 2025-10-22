import React, { useState } from 'react';
import '../main.css';

import { NavLink } from 'react-router-dom';

import { Input, InputSecure, Subtext, textColor } from './input'

export function DisplayNamePage() {

    const [displayName, changeDisplayName] = useState('');

    return (<>
        <Input value={displayName} onChange={changeDisplayName} placeholder={"display name"}/>
        <Subtext color={textColor.pink} text='you can change this at any time'/>

    </>);
}