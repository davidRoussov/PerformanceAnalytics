import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';

import Layout from './src/Layout';

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
      <View style={styles.container}>
        { this.state.loading ?
          null :
          <View style={styles.contentContainer}>
            <Layout/>
          </View>
        }
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0'
  },
  contentContainer: {
    flex: 1,
    ...Platform.select({ 
      android: {
        marginTop: StatusBar.currentHeight
      }
    })
  }
});