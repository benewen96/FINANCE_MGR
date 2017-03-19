import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

import { Container, Header, Title, Content, Button, Left, Right, Body, Icon } from 'native-base';


export default class Savings extends Component {


  constructor(props) {
    super(props);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
  }

  closeDrawer() {
    this.props.navigation.navigate('DrawerClose');
  }

  openDrawer() {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.openDrawer}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Savings</Title>
          </Body>
          <Right />
        </Header>
        <Content />
      </Container>

    );
  }
}

Savings.navigationOptions = {
  drawer: () => ({
    label: 'Savings',
  }),
};

Savings.propTypes = {
  navigation: React.PropTypes.object.isRequired,
};
