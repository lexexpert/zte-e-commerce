import React from 'react';
import './signIn.scss';
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import {emailSignInStart, googleSignInStart} from "../../redux/user/user.actions";
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
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);

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
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);
