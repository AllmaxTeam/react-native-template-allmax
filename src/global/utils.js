// @flow

import {
  isIphoneX,
  minSize,
  statusBarHeight,
  bottomSpace,
  windowWidth,
  windowHeight,
} from './constants';

export function makeRange(to: number): Array<number> {
  const range: Array<number> = [];
  for (let i = 0; i < to; i += 1) {
    range[range.length] = i;
  }
  return range;
}

type ScaleOption = 'onlyGreater';

export function scaleByHorizontal(value: number, option?: ScaleOption): number {
  const scaledValue = Math.floor((windowWidth / 375) * value);
  if (option == null) {
    return scaledValue;
  }
  return scaledValue < value ? value : scaledValue;
}

type ScaleByVerticalOption = ScaleOption | 'touchable';

export function scaleByVertical(value: number, option?: ScaleByVerticalOption): number {
  const screenHeight = isIphoneX ? windowHeight - statusBarHeight - bottomSpace : windowHeight;
  const scaledValue = Math.floor((screenHeight / 667) * value);
  if (option == null) {
    return scaledValue;
  }
  if (option === 'touchable') {
    return scaledValue < minSize ? minSize : scaledValue;
  }
  return scaledValue < value ? value : scaledValue;
}

export const getCircularViewStyleObject = (size: number) => ({
  width: size,
  height: size,
  borderRadius: size / 2,
});
