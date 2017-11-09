import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_LOADING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  user: null,
  loginLoading: false,
  signupLoading: false
};

// Use an object so you can add multiple vars within one object
export default function (state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }; // return a new object with updated email and whatever state was
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_LOADING:
      return { ...state, loginLoading: action.payload };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loginLoading: false,
        error: 'User logged in!'
      };
    case LOGIN_USER_FAILED:
      return { ...state, loginLoading: false, error: `${action.payload}` };
    case SIGNUP_SUCCESS:
      return { ...state, user: action.payload, error: 'User created!' };
    case SIGNUP_FAILED:
      return { ...state, error: `${action.payload}` };
    default:
      return state;
  }
}
