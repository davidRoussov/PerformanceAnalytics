import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StartSessionTimer from './src/StartSessionTimer';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });
    this.setState({ loading: false });
  }

  render() {
    return (
      <View>
        { this.state.loading ?
          null :
          <StartSessionTimer/>
        }
      </View>
    );
  }
}