import axios from 'axios';

export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE' ;

export const logIn = (user, pass) => dispatch => {
  // show login loader
  dispatch({ type: LOGIN_PENDING });

  // auth with API
  axios
    .post('http://localhost:5000/api/login', {
      username: user,
      password: pass
    })
    .then(res => res.data)
    .catch(err => dispatch({
      type: LOGIN_FAILURE,
      payload: err.message
    }))
}