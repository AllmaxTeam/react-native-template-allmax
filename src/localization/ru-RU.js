// @flow

import type { Strings } from './types';

export const strings: Strings = {
  login: {
    headerTitle: 'Вход',
  },
  main: {
    headerTitle: 'Главный',
    booksButtonTitle: 'Книги',
  },
  books: {
    headerTitle: 'Книги',
    getAvaliableTitle: (avaliableCount: number) => `Доступно: ${avaliableCount}`,
    getTakeButtonTitle: (count: number) => `Взять ${count} книг`,
    getReturnButtonTitle: (count: number) => `Вернуть ${count} книг`,
  },
};
