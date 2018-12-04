/**
 * Created by Bardiaswift
 *
 * @flow
 */

export type BooksState = {|
  isLoading: boolean,
  avaliableCount: number,
  receiveDateTimestamp: ?number,
|};

type SetBooksPayload = $Shape<BooksState>;
type ReceiveBooksPayload = {|
  avaliableCount: number,
|};
type TakeBooksPayload = {|
  count: number,
|};
type ReturnBooksPayload = {|
  count: number,
|};

export type SetBooksAction = {|
  type: 'Books/SET',
  payload: SetBooksPayload,
|};
export type FetchBooksAction = {|
  type: 'Books/FETCH',
|};
export type ReceiveBooksAction = {|
  type: 'Books/RECEIVE',
  ...ReceiveBooksPayload,
|};
export type TakeBooksAction = {|
  type: 'Books/TAKE',
  ...TakeBooksPayload,
|};
export type ReturnBooksAction = {|
  type: 'Books/RETURN',
  ...ReturnBooksPayload,
|};

export type BooksAction = (
  | SetBooksAction
  | FetchBooksAction
  | ReceiveBooksAction
  | TakeBooksAction
  | ReturnBooksAction
);

export type SetBooks = (payload: SetBooksPayload) => SetBooksAction;
export type FetchBooks = () => FetchBooksAction;
export type ReceiveBooks = (payload: ReceiveBooksPayload) => ReceiveBooksAction;
export type TakeBooks = (payload: TakeBooksPayload) => TakeBooksAction;
export type ReturnBooks = (payload: ReturnBooksPayload) => ReturnBooksAction;
