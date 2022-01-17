import React from 'react';
import './App.css';

// import Footer from './containers/footer/Footer';
// import Blog from './containers/blog/Blog';
// import Possibility from './containers/possiblity/Possibilty';
// import Features from './containers/features/Features';
// import WhatGPT3 from './containers/whatGPT3/WhatGPT3';
// import Header from './containers/header/Header';

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header
} from './containers';
import { Cta, Brand, Navbar } from './component';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__blog'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
