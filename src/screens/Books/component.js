// @flow

import React, { PureComponent } from 'react';
import { View, ScrollView, Text, TextInput, Button } from 'react-native';

import { strings, regularExpressions } from '~/global';

import type { StackNavigationOptions } from '~/types';
import type { Props, State } from './types';

import { styles } from './styles';

export class UnconnectedBooksScreen extends PureComponent<Props, State> {
  static navigationOptions: StackNavigationOptions = {
    title: strings.books.headerTitle,
  };

  state = {
    count: 1,
    countString: '1',
  };

  onCountChange = (text: string) => {
    const countString = text.replace(regularExpressions.numbers, '');
    this.setState(() => ({
      count: parseInt(countString, 10) || 1,
      countString,
    }));
  };

  onTakeBooksPress = () => {
    const {
      props: {
        takeBooks,
      },
      state: {
        count,
      },
    } = this;
    takeBooks({ count });
  };

  onReturnBooksPress = () => {
    const {
      props: {
        returnBooks,
      },
      state: {
        count,
      },
    } = this;
    returnBooks({ count });
  };

  render() {
    const {
      props: {
        avaliableCount,
      },
      state: {
        count,
        countString,
      },
    } = this;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text>
          {strings.books.getAvaliableTitle(avaliableCount)}
        </Text>
        <View style={styles.countRow}>
          <Text>Count:</Text>
          <TextInput
            value={`${countString}`}
            onChangeText={this.onCountChange}
            style={styles.countInput}
            maxLength={3}
          />
        </View>
        <Button
          title={strings.books.getTakeButtonTitle(count)}
          onPress={this.onTakeBooksPress}
        />
        <Button
          title={strings.books.getReturnButtonTitle(count)}
          onPress={this.onReturnBooksPress}
        />
      </ScrollView>
    );
  }
}
