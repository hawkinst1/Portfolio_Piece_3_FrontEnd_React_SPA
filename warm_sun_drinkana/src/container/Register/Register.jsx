import React, {useState} from 'react'
import "./Register.css"
import { useHistory } from 'react-router-dom'


function Register() {

 
  let history = useHistory()

  return (
    <div className='register__container app__bg section__padding'>
      <div className='register__container-backToMain'>
        <button 
          className='custom__button register__container-button rounded__button'
          onClick={()=> {history.push("/")}}
        >
          Back to main page
          </button>  
      </div>
      <div className='register__container app__bg flex__center section__padding'>
        <div className="register__container_eventBox">
          <h1 className="headtext__cormorant">Register</h1>
          <p className="p__opensans">To for access to exclusive offers and deal information</p>
          <form >
            <div className='register__container-input flex__center'>       
                <input 
                    type="text" 
                    placeholder='Enter your First Name'
                   
                    name="first_name" 
                    Id="first_name" 
                    required
                    />
            </div>
            <div className='register__container-input flex__center'>
              <input 
                  type="text" 
                  placeholder='Enter your Last Name' 
                 
                  name="last_name" 
                  Id="last_name" 
                  required
                  />
            </div>
            <div className='register__container-input flex__center'>
              <input 
                type="email" 
                placeholder='Enter your email address' 
              
                name="email" 
                Id="email" 
                required
                />
            </div>
            <div className='register__container-input flex__center'>
              <input 
                type ="password" 
                placeholder='Enter your password'
                
                name="password" 
                Id="password" 
                required
                />
            </div>
          {/*  <div className='register__container-input flex__center'>
              <input 
                  type ="password" 
                  placeholder='Re-enter your password'
                  value={secondPassword}
                  onChange={e => setSecondPassword(e.target.value)}
                  name="secondPassword" 
                  Id="second_Password" 
                  required
                  />
  </div>*/}
              <button 
                className='custom__button register__container-button'>Register</button>
            <div className='register__container-input flex__center'>
              <p className="p__opensans">Already have an Account? <br/>
                <span 
                  className='register__container-register'
                  onClick={()=>{history.push("/login")}}
                  > Click here to Sign in</span></p>
            </div> 
          </form>
        </div>
      </div>
    </div>

  )
}

export default Register