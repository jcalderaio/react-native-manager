import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_LOADING,
  SIGNUP_LOADING,
  LOGIN_USER_SUCCESS,
  SIGNUP_SUCCESS
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
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload };
    case SIGNUP_SUCCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
