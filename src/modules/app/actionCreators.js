/**
 * Created by Bardiaswift
 *
 * @flow
 */

import type {
  SetApp,
  OnAppStart,
} from './types';

import {
  SET_APP,
  ON_APP_START,
} from './actionTypes';

export const setApp: SetApp = payload => ({ type: SET_APP, payload });
export const onAppStart: OnAppStart = () => ({ type: ON_APP_START });
