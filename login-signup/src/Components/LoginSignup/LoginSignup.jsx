import React from 'react'
import './LoginSignup.css'

import person_icon from '../Assets/person_icon.png'
import email_icon from '../Assets/email_icon.png'
import Password_icon from '../Assets/Password_icon.png'

const LoginSignup = () => {
  return (
    <div className='container'>
      <div className="header">
        <div className="text">Sign Up </div> 
        <div className="underline"></div>
        <div>
          <div className="inputs">
            <div className="input">
              <img className="icon" src={person_icon} alt=""/>
              <input type="text" placeholder='Name'/>
            </div>
            <div className="input">
              <img className="icon" src={email_icon} alt=""/>
              <input type="email" placeholder='Email ID'/>
            </div>
            <div className="input">
              <img className="icon" src={Password_icon} alt=""/>
              <input type="password" placeholder='Password'/>
            </div>
            <div className="forgot-password">Lost Password?<span> Click here!</span></div>

            <div className="submit-container">
              <div className="submit">Sign up</div>
              <div className="submit">Login</div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default LoginSignup
