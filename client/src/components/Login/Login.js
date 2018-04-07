import React from 'react';
import './Login.css';

const Login = () => (
    <div className='modal'>
        <div className='modal-background'></div>
        <div className='modal-card'>
            <header className='modal-card-head has-text-centered'>
                <p className='modal-card-title'>Log In</p>
                <button className='delete' aria-label='close'></button>
            </header>
        {/* Log in stuff goes here */}
            <div className='field'>
                <label className='label'>Username</label>
                <input className='input is-info' type='text' placeholder='Username'/>
            </div>
            <div className='field'>
                <label className='label'>Password</label>
                <input className='input is-info' type='password' placeholder='Password'/>
            </div>
        </div>
        <footer className='modal-card-food'>
            <button className='button is-info'>Not registered? Sign Up here!</button>
        </footer>
    </div>
)
export default Login;