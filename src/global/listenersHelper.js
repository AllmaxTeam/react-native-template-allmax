// @flow

import { Keyboard } from 'react-native';

import type {
  Listeners,
  KeyboardEventListener,
} from 'types';

export class ListenersManager {
  listeners: Listeners = [];

  addKeyboardListeners = ({
    onHideEventName = isIOS ? 'keyboardWillHide' : 'keyboardDidHide',
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
      Keyboard.addListener(isIOS ? 'keyboardWillShow' : 'keyboardDidShow', onShow),
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
