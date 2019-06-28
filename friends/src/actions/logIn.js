import axios from 'axios';

export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE' ;

export const logIn = creds => dispatch => {
  // show login loader
  dispatch({ type: LOGIN_PENDING, payload: true });

  // auth with API
  return axios
    .post('http://localhost:5000/api/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
    })
    .catch(err => dispatch({
      type: LOGIN_FAILURE,
      payload: err.message
    }))
}