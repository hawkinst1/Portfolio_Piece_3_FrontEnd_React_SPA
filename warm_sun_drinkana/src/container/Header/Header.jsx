import React from 'react';

import {SubHeading} from "../../components"
import {images} from "../../constants"; 
import './Header.css';



function Header (){
  
return(
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title ="Embrace the long Road" />
      <h1 className='app__header-h1'>The Key to A great whisky</h1>
      <p className='p__opensans' style={{margin:"2rem 0"}}>Sample text Sample text Sample text Sample text </p>
      <a href="#menu">
        <button type="button" className='custom__button'>Explore More</button>
      </a>
    </div>

    <div className='app__wrapper_img'> 
      <img src={images.whiskyWelcome} className='app__wrapper_img-img' />
    </div>
  </div>
)
};

export default Header;
