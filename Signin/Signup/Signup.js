import React from 'react'
import HTML from './SignupHTML.js';

export default class SignUp extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  handleSignUp = () => {
    // TODO: Firebase stuff...
    console.log('handleSignUp')
  }
  render() {
    return (
      <HTML />
    )
  }
}
