import React, { Component } from 'react';
import { Text, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input } from '../components';
import * as actions from '../actions';

class LoginForm extends Component {
  onEmailChange = text => {
    this.props.emailChanged(text);
  };

  onPasswordChange = text => {
    this.props.passwordChanged(text);
  };

  render() {
    return (
      <Card>
        <KeyboardAvoidingView behavior="padding">
          <CardSection>
            <Input
              value={this.props.email}
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange}
            />
          </CardSection>
          {/*<Text>{this.props.email}</Text>*/}
          <CardSection>
            <Input
              value={this.props.password}
              secureTextEntry
              label="Password"
              placeholder="password"
              onChangeText={this.onPasswordChange}
            />
          </CardSection>
          {/*<Text>{this.props.password}</Text>*/}
          <CardSection>
            <Button>Login</Button>
          </CardSection>

          <CardSection>
            <Button>Sign Up</Button>
          </CardSection>
        </KeyboardAvoidingView>
      </Card>
    );
  }
}

const styles = {
  errorStyle: {
    fontSize: 16,
    color: 'red',
    alignSelf: 'center'
  }
};

function mapStateToProps({ auth }) {
  return {
    email: auth.email,
    password: auth.password
  };
}

export default connect(mapStateToProps, actions)(LoginForm);
