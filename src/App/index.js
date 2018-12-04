// @flow

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { onAppStart } from '~/redux/actionCreators';

import type { ConnectingActionCreators } from './types';

import { UnconnectedApp } from './component';

const mapDispatchToProps = (dispatch: *): ConnectingActionCreators => bindActionCreators(
  {
    onAppStart,
  },
  dispatch,
);

export const App = connect(
  null,
  mapDispatchToProps,
)(UnconnectedApp);
