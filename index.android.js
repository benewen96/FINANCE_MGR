/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import {
  AppRegistry,
} from 'react-native';

import {
  DrawerNavigator,
} from 'react-navigation';

import Home from './home';

const FINANCE_MGR = DrawerNavigator({
  Home: { screen: Home },
});


AppRegistry.registerComponent('FINANCE_MGR', () => FINANCE_MGR);
