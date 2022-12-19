import React from 'react';
import { useHistory } from 'react-router-dom';
import {images} from "../../constants";

import './AboutUs.css';

function AboutUs(){
  
  let history = useHistory();
  
  return(
    <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.W} alt="g letter"/>
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.barrelIcon} alt="about_barrel" className='spoon_img' />
        <p className='p__opensans'>
          sample text sample text sample text sample text
          sample text sample text sample text sample text
          sample text sample text sample text sample text
          sample text sample text sample text sample text
        </p>
      
      </div>

      <div className='app__aboutus-content_knife flex__center'>            
            <button type='button' className='custom__button' onClick={()=> {history.push("/aboutExternal")}} >Know more</button>        
      </div>

    
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.barrelIcon} alt="about_barrel" className='spoon_img' />
        <p className='p__opensans'>
          sample text sample text sample text sample text
          sample text sample text sample text sample text
          sample text sample text sample text sample text
          sample text sample text sample text sample text
        </p>
      </div>
      
    </div>
  </div>)
};


export default AboutUs;
