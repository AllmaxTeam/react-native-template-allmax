/**
 * Created by Bardiaswift
 *
 * @flow
 */

import type { AppState } from './types';

import { makeReducer } from '~/global';

import {
  SET_APP,
} from './actionTypes';

const initialState: AppState = {
  isLoading: false,
};

export default makeReducer(initialState, SET_APP);
