// @flow

import type { Strings } from './types';

export const strings: Strings = {
  login: {
    headerTitle: 'Login',
  },
  main: {
    headerTitle: 'Main',
    booksButtonTitle: 'Go to books',
  },
  books: {
    headerTitle: 'Books',
    getAvaliableTitle: (avaliableCount: number) => `Avaliable: ${avaliableCount}`,
    getTakeButtonTitle: (count: number) => `Take ${count} books`,
    getReturnButtonTitle: (count: number) => `Return ${count} books`,
  },
};
