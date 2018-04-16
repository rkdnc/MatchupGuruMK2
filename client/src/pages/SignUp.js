import React, {Component} from 'react';
import Nav from '../components/Nav';
import TextField from '../components/TextField';
import SubmitBtn from '../components/SubmitBtn';
import API from '../utils/api';

const SignUp = props => (
            <div>
                <Nav />
                <div className='columns'>
                <div className='column is-half is-offset-one-quarter'>
                    <TextField
                    label='Username'
                    value={props.username}
                    name='username'
                    type='username'
                    placeholder='e.x. "mishrasux123"'
                    handleInputChange={props.handleInputChange}
                    />
                    <TextField
                    label='Email Address (Optional)'
                    value={props.email}
                    name='email'
                    type='text'
                    placeholder='something@website.com'
                    handleInputChange={props.handleInputChange}
                    />
                    <TextField
                    label='Password'
                    value={props.password}
                    name='password'
                    type='password'
                    placeholder='wuberg&5'
                    handleInputChange={props.handleInputChange}
                    />
                
                <br />
                <SubmitBtn
                handleFormSubmit={props.handleSignUp}
                text='Submit'
                />
            </div>
            </div>
            </div>
            
        )


export default SignUp;