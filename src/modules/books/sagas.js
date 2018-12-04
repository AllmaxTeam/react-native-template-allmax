/**
 * Created by Bardiaswift
 *
 * @flow
 */

import { delay } from 'redux-saga';
import { takeLatest, select, call, put } from 'redux-saga/effects';

import type { Saga, ReduxState } from '~/types';
import type { TakeBooksAction, ReturnBooksAction } from './types';

import { FETCH_BOOKS, TAKE_BOOKS, RETURN_BOOKS } from './actionTypes';
import { setBooks, receiveBooks } from './actionCreators';

function* fetchBooks(): Saga<?string> {
  yield call(delay, 1000);
  yield put(setBooks({ isLoading: true }));
  try {
    yield put(receiveBooks({ avaliableCount: Math.floor(Math.random() * 100) + 1 }));
  } catch (exception) {
    yield put(setBooks({ isLoading: false }));
    Reactotron.log(exception);
  }
}

function* takeBooks({
  count,
}: TakeBooksAction): Saga<?string> {
  const {
    books: {
      avaliableCount,
    },
  }: ReduxState = yield select();
  if (count > avaliableCount) {
    Reactotron.log('Message from library', 'Not enough books');
  } else {
    yield put(setBooks({ avaliableCount: avaliableCount - count }));
  }
}

function* returnBooks({
  count,
}: ReturnBooksAction): Saga<?string> {
  const {
    books: {
      avaliableCount,
    },
  }: ReduxState = yield select();
  let nextAvaliableCount = avaliableCount + count;
  const limit = 100;
  if (nextAvaliableCount > limit) {
    nextAvaliableCount = limit;
  }
  yield put(setBooks({ avaliableCount: nextAvaliableCount }));
}

export default [
  takeLatest(FETCH_BOOKS, fetchBooks),
  takeLatest(TAKE_BOOKS, takeBooks),
  takeLatest(RETURN_BOOKS, returnBooks),
];
