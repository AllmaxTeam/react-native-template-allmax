/**
 * Created by Bardiaswift
 *
 * @flow
 */

import type { Dispatch as ReduxDispatch } from 'redux';
import type { AppState, AppAction } from '~/modules/app/types';
import type { BooksState, BooksAction } from '~/modules/books/types';

export type * from '~/modules/app/types';
export type * from '~/modules/books/types';

export type ReduxState = {|
  app: AppState,
  books: BooksState,
|};

export type ReduxAction = (
  | AppAction
  | BooksAction
);

export type Dispatch = ReduxDispatch<ReduxAction>;
