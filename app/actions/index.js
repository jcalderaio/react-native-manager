import firebase from 'firebase';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  SIGN_IN_LOADING,
  SIGN_UP_LOADING,
  LOGIN_USER_SUCCESS,
  SIGNUP_SUCCESS
} from './types';

export function emailChanged(text) {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
}

export function passwordChanged(text) {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
}

export function loginLoading(bool) {
  return {
    type: SIGN_IN_LOADING,
    payload: bool
  };
}

export function signupLoading(bool) {
  return {
    type: SIGN_UP_LOADING,
    payload: bool
  };
}

// Redux Thunk means we can now return a function from this action creator. This function will automatically be called by Redux Thunk and the first argument to it will be the dispatch method. Dispatch allows us to manually send an action off to all of the reducers in our application.
export function loginUser({ email, password }) {
  // expects an object with email and password (but could just as easily do (email, password))
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => dispatch({ type: LOGIN_USER_SUCCESS, payload: user }));
  };
}

export function signupUser({ email, password }) {
  return dispatch => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => dispatch({ type: SIGNUP_SUCCESS, payload: user }));
  };
}
