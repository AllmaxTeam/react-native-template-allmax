// @flow
/* eslint-disable global-require */

import type { Strings } from '~/localization/types.js';

import { currentLanguage } from './constants';

let privateStrings: Strings;
switch (currentLanguage) {
  case 'ru-RU':
    privateStrings = require('~/localization/ru-RU').strings;
    break;
  default:
    privateStrings = require('~/localization/en-US').strings;
    break;
}

export const strings = privateStrings;
