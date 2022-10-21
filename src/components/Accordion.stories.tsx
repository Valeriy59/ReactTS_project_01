import React, {useState} from 'react';

import Accordion, {AccordionPropsType} from './Accordion';
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";


export default {
    title: 'Accordion stories',
    component: Accordion,
}
const callback = action('accordion mode change event fired')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

const callbackProps = { // создаем объект с несколькими свойствами, одинаковыми для нескольких компонент, чтобы не дублировать код в них
    onClick: callback
}

export const Collapsed1 = Template.bind({})
Collapsed1.args = {
    ...callbackProps, // деструктуризация, забирааем копию объекта callbackProps
    titleValue: 'menu',
    collapsed: true,
    items: []
}

export const UnCollapsed1 = Template.bind({})
UnCollapsed1.args = {
    ...callbackProps, // деструктуризация, забирааем копию объекта callbackProps
    titleValue: 'menu',
    collapsed: false,
    items:[{title:'Dimych', value: 1}, {title:'Valera', value: 2}, {title:'Vasya', value: 3}]
}


// export const Collapsed = () => <Accordion titleValue={'menu'} collapsed={true} onClick={callback}/>
// export const UnCollapsed = () => <Accordion titleValue={'menu'} collapsed={false} onClick={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'menu'} collapsed={value} onClick={setValue} items={[{title:'Dimych', value: 1}, {title:'Valera', value: 2}, {title:'Vasya', value: 3}]} onItemClick={callbackProps.onClick}/>
}
