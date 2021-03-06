// @flow

import React, { PureComponent } from 'react';
import { ScrollView, Image, Button } from 'react-native';

import { strings, images, routeNames } from '~/global';

import type { StackNavigationOptions, Navigation } from '~/types';

import { styles } from './styles';

export type Props = {|
  navigation: Navigation<{}>,
|};

export class MainScreen extends PureComponent<Props> {
  static navigationOptions: StackNavigationOptions = {
    title: strings.main.headerTitle,
  };

  goToBooks = () => {
    const {
      props: {
        navigation: {
          navigate,
        },
      },
    } = this;
    navigate(routeNames.books);
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image source={images.allmaxLogo} style={styles.logo} />
        <Button title={strings.main.booksButtonTitle} onPress={this.goToBooks} />
      </ScrollView>
    );
  }
}
