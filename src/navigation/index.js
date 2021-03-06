// @flow

import { createStackNavigator, createAppContainer } from 'react-navigation';

import { navigationNames, routeNames } from '~/global';
import { createNavigation } from '~/components';
import {
  SplashScreen,
  LoginScreen,
  MainScreen,
  BooksScreen,
} from '~/screens';

import { styles } from './styles';

export const mainNavigation = createNavigation(navigationNames.main);

const AppNavigator = createStackNavigator(
  // $FlowFixMe
  {
    [routeNames.splash]: {
      screen: SplashScreen,
    },
    [routeNames.login]: {
      screen: LoginScreen,
    },
    [routeNames.main]: {
      screen: MainScreen,
    },
    [routeNames.books]: {
      screen: BooksScreen,
    },
  },
  {
    initialRouteName: routeNames.splash,
    cardStyle: styles.cardStyle,
  },
);

export const Navigation = createAppContainer(AppNavigator);
