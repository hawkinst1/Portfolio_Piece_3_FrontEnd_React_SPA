import axios from 'axios'
import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import "./Login.css"


function Login() {
  let history = useHistory()
  
  return (
    <div className='login__container app__bg  section__padding'>
      <div className='login__container-backToMain'>
        <button 
          className='custom__button login__container-button rounded__button'
          onClick={()=> {history.push("/")}}
        >
          Back to main page
          </button>  
      </div>
      <div className='login__container app__bg flex__center section__padding'>
        <div className="login__container_eventBox">
          <h1 className="headtext__cormorant">Log in</h1>
          <p className="p__opensans">To access exclusive offers</p>
          <form  >
            <div className='login__container-input flex__center'>
              <input 
                  type="email" 
                  id="email"
                  name="email"
                
                  placeholder='Enter your email address' 
                  required
                  />
            </div>
            <div className='login__container-input flex__center'>
              <input 
                  type ="password" 
                  id="password"
                  name="password"
                
                  placeholder='Enter your password'
                  required
                  />
            </div>
              <button 
                  className='custom__button login__container-button'                  
                  >Log in</button>
            <div className='login__container-input flex__center'>
              <p className="p__opensans">No Account? 
                <span 
                  className='login__container-register'
                  onClick={()=>{history.push("/registration")}}
                  > Click here to register</span></p>
            </div>  
          </form> 
        </div>
      </div>
      </div>
  
  )
}

export default Login