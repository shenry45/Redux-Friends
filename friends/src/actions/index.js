import axios from 'axios';

export const SUCCESS = 'SUCCESS';
export const LOADING = 'LOADING';
export const FAILURE = 'FAILURE';

export const getFriends = () => dispatch => {
  dispatch({ type: LOADING });
  axios
    .get('http://localhost:5000/')
    .then(res => dispatch({ type: SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FAILURE, payload: err.message }))
}