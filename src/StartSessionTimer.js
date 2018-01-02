import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Button, Text } from 'native-base';

export default class StartSessionTimer extends React.Component {
  render() {
    return (
      <Container>
        <Button>
          <Text>
            hello
          </Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    flex: 1
  }
});