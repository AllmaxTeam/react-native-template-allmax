/**
 * Created by Bardiaswift
 *
 * @flow
 */
/* eslint-disable global-require, import/no-extraneous-dependencies */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import type { Reducer, Middleware, StoreEnhancer, Store } from 'redux';
import type { ReduxState, ReduxAction, Dispatch } from './types';

import reducers from './reducers';
import sagas from './sagas';

type StoreCreator<State, Action> = (
  reducer: Reducer<State, Action>,
  preloadedState?: State,
  enhancer?: StoreEnhancer<State, Action, Dispatch>,
) => Store<State, Action, Dispatch>;

let sagaMiddleware: Middleware<ReduxState, ReduxAction>;
let storeCreator: StoreCreator<ReduxState, ReduxAction>;
if (__DEV__) {
  const Reactotron = require('reactotron-react-native').default;
  const sagaMonitor = Reactotron.createSagaMonitor();
  sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  storeCreator = Reactotron.createStore;
} else {
  sagaMiddleware = createSagaMiddleware();
  storeCreator = createStore;
}
const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  global.reduxNativeDevTools ? global.reduxNativeDevTools({ name: 'HelloWorld' }) : nope => nope,
);
export const store = storeCreator(reducers, enhancer);
sagaMiddleware.run(sagas);
