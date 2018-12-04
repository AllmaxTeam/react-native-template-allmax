// @flow

import type { NavigationStackScreenOptions, NavigationScreenProp } from 'react-navigation';

export type StackNavigationOptions = $Shape<NavigationStackScreenOptions>;

export type Navigation<State> = NavigationScreenProp<State>;
