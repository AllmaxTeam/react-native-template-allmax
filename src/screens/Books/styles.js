// @flow

import { StyleSheet } from 'react-native';

import { colors } from '~/constants';

export const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 16,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  countRow: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  countInput: {
    marginLeft: 8,
    width: 52,
    height: 44,
    borderColor: colors.black,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
});
