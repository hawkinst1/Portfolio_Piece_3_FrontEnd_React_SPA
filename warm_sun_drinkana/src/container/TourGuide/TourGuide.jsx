import React from 'react'
import { data } from '../../constants';
import {LocationItem, LocationDates} from '../../components';
import "./TourGuide.css"
import { useHistory } from 'react-router-dom';


function TourGuide() {
  let history = useHistory()
  return (
    <div className='tourguide__container app__bg section__padding'>
        <h1 className='headtext__cormorant'>Our Distillaries</h1>
        <div className='app__distillaries-menu_local_items'>
          {data.local.map((location,index) => (
            <LocationItem key={location.name + index} title={location.name} region={location.region}/>
            ))}
        </div>
        <h2 className='subHead__cormorant'>Dates available</h2>
          <div className='app__distillaries-menu_local_items'>
            {data.dates.map((time,index) => (              
              <LocationDates 
                key={time.name + index} 
                title={time.name} 
                months={time.months} 
                dates={time.dates}
                />
              ))}
          </div>
          <div className='login__container-backToMain'>
          <button 
            className='custom__button rounded__button'
            onClick={()=> {history.push("/")}}
          >
            Back to main page
            </button>  
      </div>
    </div>
  )
}

export default TourGuide