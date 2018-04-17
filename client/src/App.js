import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../node_modules/bulma/css/bulma.css'
import './App.css';
import Splash from './pages/Splash';
import SignUp from './pages/SignUp';
import Login from'./pages/Login';
import CreateDeck from './pages/CreateDeck';
import DecksView from './pages/DecksView';
// import Results from './pages/Results';
import API from './utils/api';


class App extends Component  {
  state= {
    username: "",
    email:"",
    password: "",
    isAuth: false
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({[name]:value});
  };

  handleSignUp = event => {
    event.preventDefault();
    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }
    if (this.state.username && this.state.password){
      API.createUser(newUser)
      .then(res => console.log('Signed Up!'))
      .catch(err => console.log(err))
    };
  }
  render() {
    return(
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Splash} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/decks' component={DecksView} />
            <Route exact path='/decks/new' component={CreateDeck} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
