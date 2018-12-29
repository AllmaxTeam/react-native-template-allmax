// @flow

import type { ElementRef } from 'react';

/* eslint-disable camelcase */
import type {
  ____DangerouslyImpreciseStyle_Internal as ImpreciseStyle,
} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
/* eslint-enable camelcase */

import type {
  SyntheticEvent,
} from 'react-native/Libraries/Types/CoreEventTypes';
import type { KeyboardEvent } from 'react-native/Libraries/Components/Keyboard/Keyboard';

export type {
  Element,
  Node,
  ComponentType,
} from 'react';

/* eslint-disable camelcase */
export type {
  ____ViewStyleProp_Internal as ViewStyle,
  ____TextStyleProp_Internal as TextStyle,
  ____ImageStyleProp_Internal as ImageStyle,
} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
/* eslint-enable camelcase */

export type {
  LayoutEvent,
  ScrollEvent,
} from 'react-native/Libraries/Types/CoreEventTypes';

export type {
  TimingAnimationConfig,
} from 'react-native/Libraries/Animated/src/animations/TimingAnimation';

export type PageSelectedEvent = SyntheticEvent<$ReadOnly<{|
  position: number,
|}>>;

export type { Saga } from 'redux-saga';

export type * from '~/redux/types';
export type * from '~/navigation/types';

export type StyleSheetValue = $Shape<ImpreciseStyle>;

export type RefObject<ElementType> = {
  current: ElementRef<ElementType> | null,
};

export type KeyboardEventListener = (e: KeyboardEvent) => void;

export type Listener = {
  +remove: () => void,
};

export type Listeners = Array<Listener>;
