import React, { useEffect, lazy, Suspense } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selectors";

import Header from "./components/Header/Header";
import {checkUserSession} from "./redux/user/user.actions";
import {GlobalStyle} from "./global.styles";
import Spinner from "./components/Spinner/Spinner";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const HomePage = lazy(() => import('./pages/home/HomePage'));
const ShopPage = lazy(() => import('./pages/shop/ShopPage'));
const SignInUp = lazy(() => import('./pages/signInUp/SignInUpPage'));
const CheckoutPage = lazy(() => import('./pages/checkout/CheckoutPage'));

const App = ({checkUserSession, currentUser}) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className='App'>
      <GlobalStyle/>
      <Header/>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner/>}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/signin' render={() => currentUser ? (<Redirect to={'/'}/>) : (<SignInUp/>)} />
          </Suspense>
        </ErrorBoundary>
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
