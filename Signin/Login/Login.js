import React from 'react';
import HTML from './LoginHTML.js';

export default class Login extends React.Component {
  
  handleLogin = () => {
    // TODO: Firebase stuff...
    console.log('handleLogin')
  }
  render() {
    return (
      <HTML handleLogin={this.handleLogin}/>
    )
  }
}