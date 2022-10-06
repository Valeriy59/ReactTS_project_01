import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';
import Rating from './components/Rating';
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating";

function App() {

    let [ratingValue, setRatingValue] = useState<0|1|2|3|4|5>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    return (
        <div>
            <AppTitle/>
            <h2>Controlled components</h2>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed}  onClick={setAccordionCollapsed}/>
            <Accordion titleValue={"Users"} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            <Rating value={1} onClick={setRatingValue}/>
            <Rating value={2} onClick={setRatingValue}/>
            <Rating value={3} onClick={setRatingValue}/>
            <Rating value={4} onClick={setRatingValue}/>
            <Rating value={5} onClick={setRatingValue}/>
            <OnOff />
            <h2>Uncontrolled components</h2>
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
