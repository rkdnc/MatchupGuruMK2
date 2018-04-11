import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
    // State Stuff

    render() {
        return (
            <div className='field'>
                <label className='label'>Username</label>
                <div className='control'>
                    <input className='input'
                    type='text'
                    name='username'
                    placeholder='Username'
                </div>
            </div>
        )
    }
}