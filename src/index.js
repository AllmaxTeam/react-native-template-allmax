// @flow

import React from 'react';
import { Provider } from 'react-redux';

import '~/config';
import { store } from '~/redux';
import { App } from '~/App';

export const ProvideredApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
