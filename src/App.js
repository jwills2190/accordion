
import './App.css';
import Accordion from './components/accordion';
import RandomColor from './components/random-color';
import StarRating from './components/sliding-stars';
// import React, { useState } from 'react';


function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      <Accordion />
      <RandomColor />
      <StarRating numberOfStars={10} />
    </div>
  );
}

export default App;

