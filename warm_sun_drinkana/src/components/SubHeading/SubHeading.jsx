import React from 'react';

import {images} from "../../constants";
{/*this is an immediate destructring of props*/}
const SubHeading = ({title}) => ( 
  <div style={{marginBottom: "1rem"}}>
    <p className='p__cormorant'>{title}</p>
    <img src={images.barrelIcon} alt="spoon" className='spoon_img' style={{width:"35px"}}/>
  </div>
);

export default SubHeading;
