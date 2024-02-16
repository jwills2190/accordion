
import './App.css';
import Accordion from './components/accordion';
import RandomColor from './components/random-color';
import StarRating from './components/sliding-stars';
import ImageSlider from './components/image-slider';
import Count from './components/count/index'
import LoadData from './components/loading-more-data';
// import React, { useState } from 'react';


function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      {/* <Count /> */}
      <Accordion />
      <RandomColor />
      <StarRating numberOfStars={10} />
      <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'} />
      <br /> <br /> <br />
      <LoadData />
    </div>
  );
}

export default App;

