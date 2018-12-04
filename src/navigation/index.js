// @flow

import { createStackNavigator, createAppContainer } from 'react-navigation';

import { navigationNames, routeNames } from '~/constants';
import { createNavigation } from '~/components';
import {
  SplashScreen,
  LoginScreen,
  MainScreen,
  BooksScreen,
} from '~/screens';

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
  },
);

export const Navigation = createAppContainer(AppNavigator);
