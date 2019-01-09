/**
 * Created by Bardiaswift
 *
 * @flow
 */

import { all } from 'redux-saga/effects';

import type { Saga } from '~/types';

import app from '~/modules/app/sagas';
import books from '~/modules/books/sagas';

export default function* sagas(): Saga<void> {
  yield all([
    app,
    books,
  ].reduce((allSagas, currentSagas) => allSagas.concat(currentSagas), []));
}
