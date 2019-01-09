// @flow

import { connect } from 'react-redux';

import { onAppStart } from '~/redux/actionCreators';

import type { ConnectingActionCreators } from './types';

import { UnconnectedApp } from './component';

const mapDispatchToProps: ConnectingActionCreators = {
  onAppStart,
};

export const App = connect(
  null,
  mapDispatchToProps,
)(UnconnectedApp);
