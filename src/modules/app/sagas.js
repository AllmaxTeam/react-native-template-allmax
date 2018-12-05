/**
 * Created by Bardiaswift
 *
 * @flow
 */

import { delay } from 'redux-saga';
import { takeLatest, call } from 'redux-saga/effects';

import { routeNames } from '~/global';
import { mainNavigation } from '~/navigation';

import type { Saga } from '~/types';

import { ON_APP_START } from './actionTypes';

function* onStart(): Saga<?string> {
  yield call(delay, 1000);
  try {
    const isLoggedIn = true;
    if (isLoggedIn) {
      mainNavigation.reset(routeNames.main);
    } else {
      mainNavigation.reset(routeNames.login);
    }
  } catch (exception) {
    Reactotron.log(exception);
  }
}

export default [
  takeLatest(ON_APP_START, onStart),
];
