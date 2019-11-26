import React from 'react';
import './signIn.scss';
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({email: '', password: ''})
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
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
          <CustomButton type={'submit'}> Sign In </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn;