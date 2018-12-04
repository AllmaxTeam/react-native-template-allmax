// @flow

import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';

import type { StackNavigationOptions } from '~/types';

export class LoginScreen extends PureComponent<{}> {
  static navigationOptions: StackNavigationOptions = {
    title: 'Login',
  };

  render() {
    return (
      <ScrollView />
    );
  }
}
