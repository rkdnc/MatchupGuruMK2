import React, {Component} from 'react';
import Nav from '../components/Nav';
import API from '../utils/api';

class Login extends Component {
   state ={
       username: "",
       password: ""
   };

        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        if (this.state.username && this.state.password) {
            API.loginUser({
                username: this.state.username,
                password: this.state.password
            })
            .then(res => console.log('Logged in!'))
            .catch(err => console.log(err));
        }
    };


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
                <div className='field'>
                    <p className='control'>
                        <button 
                        className='button is-info'
                        onClick={this.handleFormSubmit}
                        >
                        Log In
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

export default Login;