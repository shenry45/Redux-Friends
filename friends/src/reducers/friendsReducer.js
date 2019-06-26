import { SUCCESS, FAILURE, LOADING } from '../actions';

const initialState = {
  friends: [],
  loading: false,
  success: false,
  failure: false
}

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING: 
      return {
        ...state,
        loading: true
      }
    case SUCCESS: 
      return {
        ...state,
        friends: action.payload
    }
    case FAILURE: 
      return {
        ...state,
        failure: true
    }
    default:
      return state;
  }
}