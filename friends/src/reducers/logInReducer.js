import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/logIn';

const initialState = {
  pending: false,
  success: false,
  error: '',
  failure: false

}

const logInReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        pending: action.payload
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        success: true
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        failure: true,
        error: action.payload
      }
    
      default:
        return state
  }
}

export default logInReducer;