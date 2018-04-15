import React, {Component} from 'react';
import Nav from '../components/Nav';
import TextField from '../components/TextField';
import SubmitBtn from '../components/SubmitBtn';
import API from '../utils/api';

class Login extends Component {
   state ={
       username: "",
       password: ""
   };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleTextAreaSubmit = event => {
        event.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        };
        console.log(user);
        if (this.state.username && this.state.password) {
            API.loginUser(user)
            .then(res => console.log('Logged in!'))
            .catch(err => console.log(err.response));
        }
    };


    render() {
        return (
            <div>
                <Nav />
                <div className='columns'>
                <div className='column is-half is-offset-one-quarter'>
                    <TextField
                    label='Username'
                    value={this.state.username}
                    name='username'
                    type='username'
                    placeholder='e.x. "mishrasux123"'
                    handleInputChange={this.handleInputChange}
                    />
                    <TextField
                    label='Password'
                    value={this.state.password}
                    name='password'
                    type='password'
                    placeholder='Remember, we never have access to your password.'
                    handleInputChange={this.handleInputChange}
                    />
                <br />
                <SubmitBtn
                handleFormSubmit={this.handleFormSubmit}
                text='Submit'
                />
            </div>
            </div>
            </div>
        )
    }

}

export default Login;