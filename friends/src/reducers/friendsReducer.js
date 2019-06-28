import { GET_FRIENDS_SUCCESS, GET_FRIENDS_FAILURE, GET_FRIENDS_LOADING } from '../actions/getFriends';

const initialState = {
  friends: [],
  loading: false,
  success: false,
  failure: false
}

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS_LOADING: 
      return {
        ...state,
        loading: true
      }
    case GET_FRIENDS_SUCCESS: 
      return {
        ...state,
        friends: action.payload
    }
    case GET_FRIENDS_FAILURE: 
      return {
        ...state,
        failure: true
    }
    default:
      return state;
  }
}