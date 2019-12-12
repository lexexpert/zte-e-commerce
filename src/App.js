import React, { useEffect } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selectors";

import HomePage from './pages/home/HomePage';
import ShopPage from "./pages/shop/ShopPage";
import SignInUp from "./pages/signInUp/SignInUpPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";

import Header from "./components/Header/Header";
import {checkUserSession} from "./redux/user/user.actions";
import {GlobalStyle} from "./global.styles";

const App = ({checkUserSession, currentUser}) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className='App'>
      <GlobalStyle/>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to={'/'}/>) : (<SignInUp/>)} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
