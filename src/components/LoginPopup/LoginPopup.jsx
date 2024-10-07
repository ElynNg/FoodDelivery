import { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currentState, setCurrentState] = useState('sign in')

  return (
    <div className="login-popup" id="login-popup">
    <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        
        <div className="login-popup-inputs">
            {currentState === 'sign in' ? <></> : <input type="text" placeholder="Enter your name" required/>}
            
            <input type="email" placeholder="Enter your email" required />
            <input type="password" placeholder='Enter your password' required />
        </div>

        <button>{currentState == "sign up" ? "create account" : "sign in"}</button>

        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to  the terms of use & privacy policy</p>
        </div>

        {currentState === 'sign in' 
            ? <p>Create a new account ? <span onClick={() => setCurrentState('sign up')}>click here</span></p>
            : <p>Already have an account? <span onClick={() => setCurrentState('sign in')}>sign in</span></p>
        }
        
        
    </form>
    </div>
  )
}

export default LoginPopup
