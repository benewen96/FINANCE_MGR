import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

import { Container, Header, Title, Content, Button, Left, Right, Body, Icon } from 'native-base';


export default class Income extends Component {


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
            <Title>Income</Title>
          </Body>
          <Right />
        </Header>
        <Content />
      </Container>

    );
  }
}

Income.navigationOptions = {
  drawer: () => ({
    label: 'Income',
  }),
};

Income.propTypes = {
  navigation: React.PropTypes.object.isRequired,
};
