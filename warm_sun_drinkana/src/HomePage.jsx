import React from 'react'

import { AboutUs, Founder, FindUs, Footer, Gallery, Header, Intro, Laurels, Collection, Distillaries } from './container';
import { Navbar } from './components';
import './App.css';
import "./index.css";

function HomePage() {
  return (
    <div>      
      <Navbar />
      <Header />
      <AboutUs />
      <Collection />
      <Founder />
      <Distillaries/>
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer /> 
    </div>
  )
}

export default HomePage