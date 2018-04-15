import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Splash from './pages/Splash';
import SignUp from './pages/SignUp';
import Login from'./pages/Login';
import CreateDeck from './pages/CreateDeck';
import DecksView from './pages/DecksView';
// import Results from './pages/Results';


class App extends Component  {

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
