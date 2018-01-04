import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import SessionTimer from './SessionTimer';

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'New Session'
    }
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>{ this.state.title }</Title>
          </Body>
          <Right />
        </Header>
        <View style={styles.container}>
          <SessionTimer/>
        </View>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Layout;