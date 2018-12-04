/**
 * Created by Bardiaswift
 *
 * @flow
 */

export type AppState = {|
  isLoading: boolean,
|};

type SetAppPayload = $Shape<AppState>;

export type SetAppAction = {|
  type: 'App/SET',
  payload: SetAppPayload,
|};
export type OnAppStartAction = {|
  type: 'App/ON_START',
|};

export type AppAction = (
  | SetAppAction
);

export type SetApp = (payload: SetAppPayload) => SetAppAction;
export type OnAppStart = () => OnAppStartAction;
