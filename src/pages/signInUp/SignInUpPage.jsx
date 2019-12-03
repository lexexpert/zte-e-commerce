import React from 'react';
import './signInUpPage.scss';
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

const SignInUpPage = () => (
  <div className={'sign-in-up'}>
    <SignIn/>
    <SignUp/>
  </div>
);

export default SignInUpPage;
