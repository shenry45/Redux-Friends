import React from 'react';

const LoginForm = () => {
  return (
    <form>
      <input
        value={true}
        placeholder='Username'
      ></input>
      <input
        value={true}
        placeholder='Password'
      ></input>
      <button>Login</button> 
    </form>
  )
}

export default LoginForm;