import React from 'react'
import { useHistory } from 'react-router-dom';
import { SubHeading } from '../../components';
import {LocationItem} from '../../components';
import { images,data } from '../../constants';
import "./Distillaries.css";

const Distillaries = () =>{

    let history = useHistory();
return (
    <div className='app__distillaries flex_center section__padding' id="distillaries">
        <div className='app__specialMenu-title'>
            <SubHeading title="Distillaries" />
            <h1 className='headtext__cormorant'>Our Locations</h1>
            <p className='p__cormorant'>
                Sample Text Sample Text Sample Text Sample Text
            </p>
        </div>
        <div className='app__distillaries-menu'>
            <div className='app__distillaries-menu_local flex_center'>
                <div className='app__distillaries-menu_local_items'>
                    {data.local.map((location,index) => (
                        <LocationItem key={location.name + index} title={location.name} region={location.region}/>
                    ))}
                </div>

                <div className='app__distillaries_img'>
                    <img src={images.coast} alt="menu_img" />
                </div>

            </div>
        </div>

        <div style={{marginTop: "15px", textAlign: "center"}}>
          <button type='button' className='custom__button'onClick={()=> { history.push("/tourGuides")}}>View More</button>
    </div>
    </div>
)}

export default Distillaries