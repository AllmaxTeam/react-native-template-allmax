// @flow

import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

const iphoneXSize = 812;
export const isIphoneX = (
  !Platform.isPad && !Platform.isTVOS && (height === iphoneXSize || width === iphoneXSize)
);

export const minSize = 44;

export const windowWidth = width;
export const windowHeight = height;

let privateStatusBarHeight: number;

if (isIos) {
  privateStatusBarHeight = isIphoneX ? 44 : 20;
} else {
  privateStatusBarHeight = StatusBar.currentHeight;
}

export const statusBarHeight = privateStatusBarHeight;
export const bottomSpace = isIphoneX ? 34 : 0;

export const currentLanguage = 'en-US';
// export const currentLanguage = 'ru-RU';
