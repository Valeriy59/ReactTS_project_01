import React, {useState} from 'react';

import  UncontrolledAccordion  from './UncontrolledAccordion';
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledAccordion stories',
    component: UncontrolledAccordion,
}
const callback = action('UncontrolledAccordion mode change event fired')

export const Collapsed = () => <UncontrolledAccordion titleValue={'menu'} />


