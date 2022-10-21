import React, {useState} from 'react';

import {OnOff} from "./OnOff";


export default {
    title: 'OnOff',
    component: OnOff,
}

export const OnMode = () => <OnOff />
// export const ModeChanging = () => {
//     const [value, setValue] = useState<boolean>(true)
//     return <OnOff on={value}/>
// }
