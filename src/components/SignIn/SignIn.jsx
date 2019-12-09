import React from 'react';
import './signIn.scss';
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";
import {googleSignInStart} from "../../redux/user/user.actions";
import {connect} from "react-redux";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '', password: ''})
    } catch (e) {
      console.error(e);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const {googleSignInStart} = this.props;
    return (
      <div className={'sign-in'}>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name={'email'}
            label={'Email'}
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            type="password"
            name={'password'}
            label={'Password'}
            onChange={this.handleChange}
            value={this.state.password}
            required
          />
          <div className={'buttons'}>
            <CustomButton type={'submit'}> Sign In </CustomButton>
            <CustomButton type={'button'} onClick={googleSignInStart} isGoogleSignIn> Sign in with Google </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart())
});

export default connect(null, mapDispatchToProps)(SignIn);
