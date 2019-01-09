// @flow

import { connect } from 'react-redux';

import {
  fetchBooks,
  takeBooks,
  returnBooks,
} from '~/redux/actionCreators';

import type { ReduxState } from '~/types';
import type { ConnectingProps, ConnectingActionCreators } from './types';

import { UnconnectedBooksScreen } from './component';

function mapStateToProps({
  books: {
    isLoading,
    avaliableCount,
    receiveDateTimestamp,
  },
}: ReduxState): ConnectingProps {
  return {
    isLoading,
    avaliableCount,
    receiveDateTimestamp,
  };
}

const mapDispatchToProps: ConnectingActionCreators = {
  fetchBooks,
  takeBooks,
  returnBooks,
};

export const BooksScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UnconnectedBooksScreen);
