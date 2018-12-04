/**
 * Created by Bardiaswift
 *
 * @flow
 */

import type { ReduxAction } from '~/types';
import type {
  BooksState,
} from './types';

import { makeReducer } from '~/utils';

import {
  SET_BOOKS,
  RECEIVE_BOOKS,
} from './actionTypes';

const initialState: BooksState = {
  isLoading: false,
  avaliableCount: 100,
  receiveDateTimestamp: null,
};

function customReducer(state: BooksState, action: ReduxAction): BooksState {
  switch (action.type) {
    case RECEIVE_BOOKS: {
      const { avaliableCount } = action;
      return {
        ...state,
        isLoading: false,
        avaliableCount,
        receiveDateTimestamp: Date.now(),
      };
    }
    default:
      return state;
  }
}

export default makeReducer(initialState, SET_BOOKS, customReducer);
