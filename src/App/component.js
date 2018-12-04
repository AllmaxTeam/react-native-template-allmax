// @flow

import React, { PureComponent } from 'react';

import { navigationNames } from '~/constants';
import { Navigation } from '~/navigation';
import { createNavigatiorSetter } from '~/components';

import type { ConnectingActionCreators } from './types';

export type Props = {|
  ...ConnectingActionCreators,
|};

export class UnconnectedApp extends PureComponent<Props> {
  navigatiorSetter = createNavigatiorSetter(navigationNames.main);

  componentDidMount() {
    const {
      props: {
        onAppStart,
      },
    } = this;
    onAppStart();
  }

  render() {
    return (
      // $FlowFixMe
      <Navigation
        ref={this.navigatiorSetter}
      />
    );
  }
}
