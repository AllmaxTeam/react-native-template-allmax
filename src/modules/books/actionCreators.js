/**
 * Created by Bardiaswift
 *
 * @flow
 */

import type {
  SetBooks,
  FetchBooks,
  ReceiveBooks,
  TakeBooks,
  ReturnBooks,
} from './types';

import {
  SET_BOOKS,
  FETCH_BOOKS,
  RECEIVE_BOOKS,
  TAKE_BOOKS,
  RETURN_BOOKS,
} from './actionTypes';

export const setBooks: SetBooks = payload => ({ type: SET_BOOKS, payload });
export const fetchBooks: FetchBooks = () => ({ type: FETCH_BOOKS });
export const receiveBooks: ReceiveBooks = payload => ({ type: RECEIVE_BOOKS, ...payload });
export const takeBooks: TakeBooks = payload => ({ type: TAKE_BOOKS, ...payload });
export const returnBooks: ReturnBooks = payload => ({ type: RETURN_BOOKS, ...payload });
