/**
 * Created by Bardiaswift
 *
 * @flow
 */

import { combineReducers } from 'redux';

import app from '~/modules/app/reducer';
import books from '~/modules/books/reducer';

export default combineReducers({
  app,
  books,
});
