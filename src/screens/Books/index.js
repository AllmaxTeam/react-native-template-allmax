// @flow

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  fetchBooks,
  takeBooks,
  returnBooks,
} from '~/redux/actionCreators';

import type { ReduxState, Dispatch } from '~/types';
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

const mapDispatchToProps = (dispatch: Dispatch): ConnectingActionCreators => bindActionCreators(
  {
    fetchBooks,
    takeBooks,
    returnBooks,
  },
  dispatch,
);

export const BooksScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UnconnectedBooksScreen);
