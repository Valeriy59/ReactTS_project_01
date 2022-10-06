import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';
import Rating from './components/Rating';
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating";

function App() {
    return (
        <div>
            <AppTitle/>
            <Rating value={0}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <OnOff />
            <UncontrolledAccordion titleValue={"Menu"} />
            <UncontrolledAccordion titleValue={"Users"} />
            <UncontrolledRating />
        </div>
    );
}

function AppTitle() {
    return (
        <>This is APP component</>
    )
}

export default App;
