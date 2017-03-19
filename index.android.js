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
import Income from './income';
import Savings from './savings';
import Bills from './bills';
import Taxes from './taxes';
import Projection from './projection';

const FINANCE_MGR = DrawerNavigator({
  Home: { screen: Home },
  Income: { screen: Income },
  Savings: { screen: Savings },
  Bills: { screen: Bills },
  Taxes: { screen: Taxes },
  Projection: { screen: Projection },
});


AppRegistry.registerComponent('FINANCE_MGR', () => FINANCE_MGR);
