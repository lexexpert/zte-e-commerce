import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selectors";

import HomePage from './pages/home/HomePage';
import ShopPage from "./pages/shop/ShopPage";
import SignInUp from "./pages/signInUp/SignInUpPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";

import Header from "./components/Header/Header";
import {checkUserSession} from "./redux/user/user.actions";

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {checkUserSession} = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    //this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to={'/'}/>) : (<SignInUp/>)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
