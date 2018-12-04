// @flow
/* eslint-disable global-require, import/no-extraneous-dependencies */

if (__DEV__) {
  const Reactotron = require('reactotron-react-native').default;
  const { trackGlobalErrors, openInEditor } = require('reactotron-react-native');
  const { reactotronRedux } = require('reactotron-redux');
  const sagaPlugin = require('reactotron-redux-saga');
  Reactotron.configure({
    name: 'Savl',
    // host: '192.168.88.37',
  })
    .useReactNative()
    .use(trackGlobalErrors())
    .use(reactotronRedux())
    .use(sagaPlugin())
    .use(openInEditor())
    .connect();
  global.Reactotron = Reactotron;
} else {
  global.Reactotron = {
    log: () => {},
    logImportant: () => {},
    warn: () => {},
    error: () => {},
  };
}
