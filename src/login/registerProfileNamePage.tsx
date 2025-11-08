import '../main.css';

import { Input, InputSecure, Subtext, textColor } from './input'
import * as React from 'react';

export function DisplayNamePage() {

    const [displayName, changeDisplayName] = React.useState('');

    return (<>
        <Input value={displayName} onChange={changeDisplayName} placeholder={"display name"}/>
        <Subtext color={textColor.pink} text='you can change this at any time'/>

    </>);
}