// @flow

import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import type { StackNavigationOptions } from '~/types';

import { styles } from './styles';

export function SplashScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const navigationOptions: StackNavigationOptions = {
  header: null,
};

SplashScreen.navigationOptions = navigationOptions;
