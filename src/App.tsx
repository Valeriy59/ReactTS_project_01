import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';
import Rating from './components/Rating';

function App() {
  return (
    <div> 
      <AppTitle/>
      <Rating/>
      <Accordion titleValue={"Menu"} collapsed={true}/>
      <Accordion titleValue={"Users"} collapsed={false}/>
      <Rating/>
    </div>
  );
}

function AppTitle() {
  return (
    <>This is APP component</>
  )
}

export default App;
