/**
 * Created by Bardiaswift on 23/12/2016.
 *
 * @flow
 */

// import { ON_LOGOUT_SUCCESS } from '~/modules/auth/actionTypes';

export function makeReducer<State>(
  initialState: State,
  actionType?: ?string,
  customReducer?: ?(state: State, action: *) => State,
  // preventClear?: boolean,
) {
  return (state: State = initialState, action: *): State | void => {
    const { type } = action;
    if (actionType && type === actionType && typeof state === 'object') {
      const { payload } = action;
      return payload ? { ...state, ...payload } : initialState;
    }
    // if (type === ON_LOGOUT_SUCCESS && !preventClear) {
    //   return initialState;
    // }
    return customReducer ? customReducer(state, action) : state;
  };
}
