import React from 'react';

import './LocationDates.css';

const LocationItem = ({title, months, dates}) => (
  
  <div className='app__locationitem'>
    <div className='app__locationitem-head'>
      <div className='app__locationitem-name'>
        <p className='p__cormorant' style={{color: "#DCCA87"}}>{title}</p>
      </div>

      <div className="app__locationitem-dash"/>

      <div className='app__locationitem-name'>
        <p className='p__cormorant' >{months}</p>
           
      </div>
      <div className="app__locationitem-dash"/>
      
      <div className='app__locationitem-name'>
        <p className='p__cormorant' >{dates}</p>
      </div>
    </div>

  </div>
);

export default LocationItem;
