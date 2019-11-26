import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import HomePage from './pages/home/HomePage';
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/Header/Header";
import SignInUp from "./pages/signInUp/SignInUp";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signIn' component={SignInUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
