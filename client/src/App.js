import React, { Component } from 'react';
import './App.css';
// import Splash from './pages/Splash';
// import SignUp from './pages/SignUp';
// import Login from'./pages/Login';
import CreateDeck from './pages/CreateDeck';
// import DecksView from './pages/DecksView';


class App extends Component  {
  // <Splash />
  // <SignUp />
  // <Login />
  render() {
    return(
      <CreateDeck />
      // <DecksView />
    )
  }

}

export default App;
