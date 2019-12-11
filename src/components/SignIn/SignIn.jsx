import React, {useState} from 'react';
import './signIn.scss';
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import {emailSignInStart, googleSignInStart} from "../../redux/user/user.actions";
import {connect} from "react-redux";

const SignIn = ({emailSignInStart, googleSignInStart}) => {

  const [userCredentials, setCredentials] = useState({email: '', password: ''});
  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({...userCredentials, [name]: value });
  };

  return (
    <div className={'sign-in'}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name={'email'}
          label={'Email'}
          onChange={handleChange}
          value={email}
          required
        />
        <FormInput
          type="password"
          name={'password'}
          label={'Password'}
          onChange={handleChange}
          value={password}
          required
        />
        <div className={'buttons'}>
          <CustomButton type={'submit'}> Sign In </CustomButton>
          <CustomButton type={'button'} onClick={googleSignInStart} isGoogleSignIn> Sign in with Google </CustomButton>
        </div>
      </form>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);
