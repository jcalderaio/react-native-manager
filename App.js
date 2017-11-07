import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
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

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginScreen />
      </Provider>
    );
  }
}
