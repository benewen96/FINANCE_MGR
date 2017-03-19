/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Drawer } from 'native-base';


export default class FINANCE_MGR extends Component {

  constructor(props) {
    super(props);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
  }

  closeDrawer() {
    this._drawer._root.close();
  }

  openDrawer() {
    this._drawer._root.open();
  }

  render() {
    console.log('test');

    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        content={<Text>Test</Text>}
        onClose={() => this.closeDrawer()}
      >
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={this.openDrawer}>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Finance Manager</Title>
            </Body>
            <Right />
          </Header>

          <Content />

          <Footer>
            <FooterTab>
              <Button full>
                <Text>Footer</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </Drawer>
    );
  }
}


AppRegistry.registerComponent('FINANCE_MGR', () => FINANCE_MGR);
