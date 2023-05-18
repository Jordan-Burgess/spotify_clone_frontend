import React from 'react'
import logo from '../assets/spotify_logo_black.png';
import './LogIn.css'


function LogIn() {
  return (
    <div className="LogIn">
        <img src= {logo} className='Logo'/>

        <hr/>
        <h1>Log in to Spotify</h1>

        <form>
            <div className='formSection'>
                <label for="email_username" className='textForm'>Email address of username</label>
                <input className='textInput' type='email' id='email_username' name='email' placeholder="Email address or username" required />
            </div>

            <div className='formSection'>
                <label for="password_username" className='textForm'>Password</label>
                <input className='textInput' type='password' id="password_username" placeholder='Password' required/>
            </div>


            <div className='textRemember2'>

                    <label className="style-checkbox textRemember">
                        <input type="checkbox"/>
                        <span className='checkmark'></span>
                        Remember me
                        
                    </label>

                   {/* <input className="style-checkbox" type='checkbox' id='remember' name='remember' /> 
                   <label for="remember" className='textRemember'> <span className='checkmark'></span> Remember me</label> */}

            </div>
            
            <button className="btn btn-success" > Log in </button>
            <p id="password-style"><u>Forgot your password?</u></p>
            
            
            <hr/>
            <div className="container-bottom">
                <p><span id="style-recover"> Don't have an account?</span>  <span id ="under-signup">Sign up for Spotify</span></p>
            </div>
            

        </form>
        

    </div>
  )
}

export default LogIn