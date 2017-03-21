import React, { Component } from 'react';


import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Card, CardItem, Text, ListItem } from 'native-base';


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

        <Content>

          <Card>
            <CardItem bordered>
              <Icon name="card" />
              <Text>Take hold of your finances</Text>
            </CardItem>

            <CardItem>
              <Body>
                <Text>
                  Managing your daily finances can be a time-consuming and tedious task. {'<'}app name{'>'} takes the hassle out of keeping track of your
                  bills, savings, taxes and helps you make your spending more predictable and manageable.
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem bordered >
              <Icon name="calendar" />
              <Text>Todays summary</Text>
            </CardItem>

            <ListItem icon>
              <Left>
                <Icon name="cash" />
              </Left>
              <Body>
                <Text>Spent today</Text>
              </Body>
              <Right>
                <Text>£15</Text>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="paper" />
              </Left>
              <Body>
                <Text>Monzo balance</Text>
              </Body>
              <Right>
                <Text>£38.47</Text>
              </Right>
            </ListItem>
          </Card>

        </Content>

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
