import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

import { Container, Header, Title, Content, Button, Left, Right, Body, Icon } from 'native-base';


export default class Home extends Component {


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
    console.log('test');

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.openDrawer}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content />
      </Container>

    );
  }
}

Home.navigationOptions = {
  drawer: () => ({
    label: 'Home',
  }),
};

Home.propTypes = {
  navigation: React.PropTypes.object.isRequired,
};
