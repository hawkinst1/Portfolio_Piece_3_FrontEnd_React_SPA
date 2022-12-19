import React from 'react';

import './LocationItem.css';

const LocationItem = ({title, region}) => (
  <div className='app__locationitem'>
    <div className='app__locationitem-head'>
      <div className='app__locationitem-name'>
        <p className='p__cormorant' style={{color: "#DCCA87"}}>{title}</p>
      </div>

      <div className="app__locationitem-dash"/>

      <div className='app__locationitem-name'>
        <p className='p__cormorant' >{region}</p>
      </div>
    </div>

  </div>
);

export default LocationItem;
