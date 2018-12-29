// @flow

import { Keyboard } from 'react-native';

import {
  isIos,
} from './constants';

import type {
  Listeners,
  KeyboardEventListener,
} from '~/types';

export class ListenersManager {
  listeners: Listeners = [];

  addKeyboardListeners = ({
    onHideEventName = isIos ? 'keyboardWillHide' : 'keyboardDidHide',
    onShow,
    onHide,
    otherListeners,
  }: {
    onHideEventName?: string,
    onShow: KeyboardEventListener,
    onHide: KeyboardEventListener,
    otherListeners?: Listeners,
  }) => {
    const { listeners } = this;
    listeners.push(
      Keyboard.addListener(isIos ? 'keyboardWillShow' : 'keyboardDidShow', onShow),
      Keyboard.addListener(onHideEventName, onHide),
    );
    if (otherListeners != null) {
      listeners.push(...otherListeners);
    }
  };

  removeListeners = () => {
    const { listeners } = this;
    while (listeners) {
      listeners[0].remove();
      listeners.shift();
    }
  };
}
