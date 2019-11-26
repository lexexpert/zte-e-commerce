import React from 'react';
import './signInUp.scss';
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

const SignInUp = () => (
  <div className={'sign-in-up'}>
    <SignIn/>
    <SignUp/>
  </div>
);

export default SignInUp;