import React, { Component } from 'react';
import './App.css';
import Title from './components/Header'
import cardsArray from './cardsArray.json'
import BugCard from './components/Card'


function App() {
  return <wrapper> 
    <Title />
    <BugCard imgArray = {cardsArray}/>
  </wrapper>
}
export default App;
