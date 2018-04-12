import React, {Component} from 'react';
import Nav from '../components/Nav';
import API from '../utils/api';

class SignUp extends Component {
    state= {
        username: "",
        email: "",
        password: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        };
        if (this.state.username && this.state.password) {
            API.createUser(newUser)
            .then(res => console.log('Signed up!'))
            .catch(err => console.log(err));
        }
    }

    render() {
        return (
            <div>
                <Nav />
                <div className='columns'>
                <div className='column is-half is-offset-one-quarter'>
                <div className='field'>
                    <label className='label'>Username</label>
                    <div className='control'>
                        <input 
                        value={this.state.username}
                        name='username'
                        className='input'
                        type='username'
                        placeholder='e.g. "mishrasux123"'
                        onChange={this.handleInputChange}
                        />
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Email Address (optional)</label>
                    <div className='control'>
                        <input 
                        value={this.state.email}
                        name='email'
                        className='input'
                        type='text'
                        placeholder='e.g. "something@website.com"'
                        onChange={this.handleInputChange}
                        />
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Password</label>
                    <div className='control'>
                    <input
                    value={this.state.password}
                    name='password'
                    className='input'
                    type='password'
                    placeholder='Was it WUBERG123? Hm....'
                    onChange={this.handleInputChange}
                    />
                </div>
                <br />
                <div className='field'>
                    <p className='control'>
                        <button 
                        className='button is-info'
                        onClick={this.handleFormSubmit}
                        >
                        Sign Up
                        </button>
                    </p>
                </div>
            </div>
            </div>
            </div>
            </div>
        )
    }


}

export default SignUp;