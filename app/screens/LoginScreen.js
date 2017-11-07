import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LoginForm from '../containers/LoginForm';
import { Header } from '../components';

export default class Main extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Login'} />
        <LoginForm />
      </View>
    );
  }
}
