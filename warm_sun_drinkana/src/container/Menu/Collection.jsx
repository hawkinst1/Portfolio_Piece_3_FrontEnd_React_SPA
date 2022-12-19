import React from 'react';

import { SubHeading,MenuItem } from '../../components';
import {images, data} from "../../constants";
import './SpecialMenu.css';

const Collection = () => (
  <div className='app__specialMenu flex_center section_padding' id ="menu">
    <div className='app__specialMenu-title'>
      <SubHeading title="Drinks for all occasions" />
      <h1 className='headtext__cormorant'>The Collection - Highlighted</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex_center'>
        <p className='app__specialMenu-menu_heading'>Single Malt</p>
        <div className='app__specialMenu-menu_items'>
          {data.wines.map((wine,index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.age}/>
          ))}
        </div>
      </div>

      <div className='app__specialMenu-menu_img'>
            <img src={images.theCollection} alt="menu_img" />
      </div>
      <div className='app__specialMenu-menu_cocktails flex_center'>
        <p className='app__specialMenu-menu_heading'>Double Malt</p>
        <div className='app__specialMenu-menu_items'>
          {data.cocktails.map((cocktail,index) => (
            <MenuItem key={cocktail.title + index} title ={cocktail.title} price={cocktail.price} tags={cocktail.age}/>
          ))}
        </div>
      </div>
    </div>
  
  </div>
);

export default Collection;
