// @flow

export type Strings = {|
  login: {|
    headerTitle: string,
  |},
  main: {|
    headerTitle: string,
    booksButtonTitle: string,
  |},
  books: {|
    headerTitle: string,
    getAvaliableTitle: (avaliableCount: number) => string,
    getTakeButtonTitle: (count: number) => string,
    getReturnButtonTitle: (count: number) => string,
  |},
|};
