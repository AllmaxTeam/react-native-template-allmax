/** @format */
// @flow

import { AppRegistry } from 'react-native';
import { ProvideredApp } from './src';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => ProvideredApp);
