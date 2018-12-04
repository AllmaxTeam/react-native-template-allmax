// @flow

import type {
  Navigation,
  FetchBooks,
  TakeBooks,
  ReturnBooks,
} from '~/types';

export type ConnectingProps = {|
  isLoading: boolean,
  avaliableCount: number,
  receiveDateTimestamp: ?number,
|};

export type ConnectingActionCreators = {|
  fetchBooks: FetchBooks,
  takeBooks: TakeBooks,
  returnBooks: ReturnBooks,
|};

export type Props = {|
  navigation: Navigation<{}>,
  ...ConnectingProps,
  ...ConnectingActionCreators,
|};

export type State = {|
  count: number,
  countString: string,
|};
