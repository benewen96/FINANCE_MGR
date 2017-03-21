/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/
import {
  AppRegistry,
} from 'react-native';

import React from 'react';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import financeManager from './reducers/financeManager';
import FinanceManager from './containers/financeManager';

const reducers = combineReducers(financeManager);
const store = createStore(reducers);


const App = () => (
  <Provider store={store}>
    <FinanceManager />
  </Provider>
);
AppRegistry.registerComponent('FINANCE_MGR', () => App);
