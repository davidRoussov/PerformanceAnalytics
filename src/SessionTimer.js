import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'native-base';

class SessionTimer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button success style={styles.startSessionButton}>
          <Text>START!</Text>
        </Button>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20
  },
  startSessionButton: {
    height: 60,
    width: 200,
    justifyContent: 'center',
    alignSelf: 'center'
  }
});

export default SessionTimer;