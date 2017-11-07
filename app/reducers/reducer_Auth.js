import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  user: null,
  loadingSignIn: false,
  loadingSignUp: false
};

// Use an object so you can add multiple vars within one object
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }; // return a new object with updated email and whatever state was
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    default:
      return state;
  }
}
