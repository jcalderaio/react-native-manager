import React, { Component } from 'react';
import { Text, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input, Spinner } from '../components';
import * as actions from '../actions'; // Imports ALL actions

class LoginForm extends Component {
  onEmailChange = text => {
    this.props.emailChanged(text);
  };

  onPasswordChange = text => {
    this.props.passwordChanged(text);
  };

  loginUserPressed = () => {
    const { email, password } = this.props;

    this.props.loginUser({ email, password }); // loginUser expects an object with email and password, although could have just as easily done it without an object
  };

  signupUserPressed = () => {
    const { email, password } = this.props;

    this.props.signupUser({ email, password });
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

          <CardSection>
            <Input
              value={this.props.password}
              secureTextEntry
              label="Password"
              placeholder="password"
              onChangeText={this.onPasswordChange}
            />
          </CardSection>

          <Text style={styles.errorStyle}>{this.props.error}</Text>

          <CardSection>
            {!this.props.loginLoading && <Spinner size="small" />}
            {this.props.loginLoading && (
              <Button onPress={this.loginUserPressed}>Login</Button>
            )}
          </CardSection>

          <CardSection>
            <Button onPress={this.signupUserPressed}>Sign Up</Button>
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
    password: auth.password,
    error: auth.error,
    loginLoading: auth.loginLoading
  };
}

export default connect(mapStateToProps, actions)(LoginForm);
