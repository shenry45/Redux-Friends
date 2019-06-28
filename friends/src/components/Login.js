import React from 'react';
import { connect } from 'react-redux';

import { logIn } from '../actions/logIn';

class Login extends React.Component {
  state = {
      username: '',
      password: ''
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLoggingIn = e => {
    e.preventDefault();

    this.props
      .logIn(this.state)
      .then(() => this.props.history.push("/friends"))
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

export default connect(null, { logIn })(Login);