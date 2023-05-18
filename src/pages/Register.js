import React from 'react';
import logo from '../assets/spotify_logo_black.png';
import './Register.css';

function Register() {
  return (
    <div className='Register'>
      <img src={logo} className='Logo'/>
      <p>Sign up for free to start listening.</p>
      <hr/>
      <form>
        <p>Sign up with your email address</p>
        {/* comment */}
        <div className='FormSection'>
          <label for='email'>What's your email?</label>
          <input className='textInput' type='email' id='email' name='email' placeholder='Enter your email.' required/>
        </div>

        <div className='FormSection'>
          <label for='password'>Create a password</label>
          <input className='textInput' type='password' id='password' name='password' placeholder='Create a password.' required/>
        </div>

        <div className='FormSection'>
          <label for='password2'>Confirm your password?</label>
          <input className='textInput' type='password' id='password2' name='password2' placeholder='Enter your password again.' required/>
        </div>

        <div className='FormSection'>
          <label for='name'>What should we call you?</label>
          <input className='textInput' type='text' id='name' name='name' placeholder='Enter a profile name.' required/>
          <p className='NameNotice'>This appears on your profile.</p>
        </div>

        
        <hr/>
        <label for='birthday'>What's your date of birth?</label>
        <input type='date' id='birthday' name='birthday'/>
        <hr/>

        <p>What's your gender?</p>
        <div className='inline-group'>
          <label for='gender'>Male</label>
            <input type='radio' id='male' name='gender' value='male'/>
            <label for='gender'>Female</label>
            <input type='radio' id='female' name='gender' value='female'/>
            <label for='gender'>Non-binary</label>
            <input type='radio' id='nonbinary' name='gender' value='nonbinary'/>
            <label for='gender'>Other</label>
            <input type='radio' id='other' name='gender' value='other'/>
            <label for='gender'>Prefer not to say</label>
            <input type='radio' id='noanswer' name='gender' value='noanswer'/>
        </div>
        
        
        <hr/>


        <input type='checkbox' id='sharedata' name='sharedata'/>
        <p>Share my data with Spotify's content providers for marketing purposes.</p>
        <p>By clicking on sign-up, you agree with Spotify's <a href="#">Terms and Conditions of Use.</a></p>
        <p>To learn more about how Spotify collects, uses, shares and protects your personal data, please see  <a href='#'>Spotify's Privacy Policy.</a></p>
        <button type='submit'>Sign Up</button>
      </form>
      <p>Have an account? <a href='#'>Log in.</a></p>
    </div>
  )
}

export default Register