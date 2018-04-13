import React, {Component} from 'react';
import Nav from '../components/Nav';
import Form from '../components/Form';
import SubmitBtn from '../components/SubmitBtn';
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
                    <Form
                    label='Username'
                    value={this.state.username}
                    name='username'
                    type='username'
                    placeholder='e.x. "mishrasux123"'
                    handleInputChange={this.handleInputChange}
                    />
                    <Form
                    label='Email Address (Optional)'
                    value={this.state.email}
                    name='email'
                    type='text'
                    placeholder='something@website.com'
                    handleInputChange={this.handleInputChange}
                    />
                    <Form
                    label='Password'
                    value={this.state.password}
                    name='password'
                    type='password'
                    placeholder='wuberg&5'
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

export default SignUp;