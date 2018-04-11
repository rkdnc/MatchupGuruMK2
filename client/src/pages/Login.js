import React, {Component} from 'react';
import Nav from '../components/Nav';
import API from '../utils/api';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleInputChange = this.handeChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange = event => {
        const username = event.target.username;
        const password = event.target.password;
        this.setState({
            username: username,
            password: password
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            API.loginUser({
                username: this.state.username,
                password: this.state.password
            })
            .then(res => console.lot('Logged in!'))
            .catch(err => console.log(err));
        }
    };


    render(){
        return (
            <div>
                <Nav />
                <div className='columns'>
                <div className='column is-half is-offset-one-quarter'>
                <div className='field'>
                    <label className='label'>Username</label>
                    <div className='control'>
                        <input 
                        className='input'
                        type='username'
                        placeholder='e.g. "mishrasux123"'
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        />
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Password</label>
                    <div className='control'>
                    <input
                    className='input'
                    type='password'
                    placeholder='Was it WUBERG123? Hm....'
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    />
                </div>
                <div className='field'>
                    <p className='control'>
                        <button 
                        className='button is-success'
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