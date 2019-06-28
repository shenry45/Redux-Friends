import React from 'react';
import { connect } from 'react-redux';

import { logIn } from '../actions/logIn';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLoggingIn = e => {
    e.preventDefault();

    console.log(this.state.username)

    this.props.logIn(this.props.username, this.props.password);
  }

  render() {
    return (
      <form onSubmit={this.handleLoggingIn}>
        <input
          name='username'
          value={this.props.username}
          onChange={this.handleChanges}
        ></input>
        <input
          name='password'
          value={this.props.password}
          onChange={this.handleChanges}
        ></input>
        <button
          type='submit'
          onClick={this.handleLoggingIn}
        >Login</button> 
      </form>
    )
  }
}

export default connect(null, { logIn })(LoginForm);