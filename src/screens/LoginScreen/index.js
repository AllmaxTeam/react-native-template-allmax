// @flow

import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';

import { strings } from '~/global';

import type { StackNavigationOptions } from '~/types';

export class LoginScreen extends PureComponent<{}> {
  static navigationOptions: StackNavigationOptions = {
    title: strings.login.headerTitle,
  };

  render() {
    return (
      <ScrollView />
    );
  }
}
