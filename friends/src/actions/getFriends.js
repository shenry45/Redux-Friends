import axios from 'axios';

export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS';
export const GET_FRIENDS_LOADING = 'GET_FRIENDS_LOADING';
export const GET_FRIENDS_FAILURE = 'GET_FRIENDS_FAILURE';

export const getFriends = () => dispatch => {
  dispatch({ type: GET_FRIENDS_LOADING });
  axios
    .get('http://localhost:5000/')
    .then(res => dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: GET_FRIENDS_FAILURE, payload: err.message }))
}