import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './app/reducers';
import LoginScreen from './app/screens/LoginScreen';

export default class App extends Component {
  componentWillMount() {
    // This firebase initizalization should only run ONE time!
    const config = {
      apiKey: 'AIzaSyC8EfOkt9ISC6qAFyLfQo1v4Q7yj7A8lOg',
      authDomain: 'manager-d4e18.firebaseapp.com',
      databaseURL: 'https://manager-d4e18.firebaseio.com',
      projectId: 'manager-d4e18',
      storageBucket: 'manager-d4e18.appspot.com',
      messagingSenderId: '361818497547'
    };
    firebase.initializeApp(config);
  }

  // The 2nd argument in createStore is for any initial state we want to pass to Redux. Like prepopulate email and password flag of reducer_Auth. Not very common - mostly applicable to server side rendering. The 3rd argument is called a store enhancer because it adds additional functionality to the store.
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    );
  }
}
