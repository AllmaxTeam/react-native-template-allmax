// @flow

import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

export const minSize = 44;

export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

const iphoneXSize = 812;
export const isIphoneX = (
  !Platform.isPad && !Platform.isTVOS && (height === iphoneXSize || width === iphoneXSize)
);

let privateStatusBarHeight: number;

if (isIos) {
  privateStatusBarHeight = isIphoneX ? 44 : 20;
} else {
  privateStatusBarHeight = StatusBar.currentHeight;
}

export const statusBarHeight = privateStatusBarHeight;
