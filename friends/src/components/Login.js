import React from 'react';
import Loader from 'react-loader-spinner';
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
    
    if (this.props.pending) {
      return <Loader type="Ball-Triangle" color="#0f0ff0" height={80} width={80} />
    }

    return (
      <div>
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
      </div>
    )
  }
}

const mapStatetoProps = state => {
  return {
    pending: state.logInReducer.pending
  }
}

export default connect(mapStatetoProps, { logIn })(Login);