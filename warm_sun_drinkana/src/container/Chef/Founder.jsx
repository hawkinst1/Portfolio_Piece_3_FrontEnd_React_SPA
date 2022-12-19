import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Founder = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.founder} alt ="chef" />
    </div>
    <div className='app__wrapper_info'>
          <SubHeading title="The Distillers"/>
          <h1 className='headtext__cormorant'>What we believe in</h1>
          <div className='app__chef-content'>
            <div className='app__chef-content_quote'>
                <img src={images.quote} alt="quote"/>
                <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua.
              </p>
             </div>
              <p className='p__opensans'>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
        
            <div className='app__chef-sign'>
              <p>The Warm Sun Distillers</p>
              <p className='p__opensans'>Founders</p>
              <img src={images.signature} alt="signature"/>
            </div>
          </div>
    </div>
  </div>
);

export default Founder;
