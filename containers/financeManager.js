import {
  DrawerNavigator,
} from 'react-navigation';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from '../home';
import Income from '../income';
import Savings from '../savings';
import Bills from '../bills';
import Taxes from '../taxes';
import Projection from '../projection';


import { updateBalance } from '../actions/actions';

const FinanceManagerNavigator = DrawerNavigator({
  Home: { screen: Home },
  Income: { screen: Income },
  Savings: { screen: Savings },
  Bills: { screen: Bills },
  Taxes: { screen: Taxes },
  Projection: { screen: Projection },
});

class FinanceManager extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this);
    const { state, actions } = this.props;
    return (
      <FinanceManagerNavigator
        test="ben"
      />
    );
  }
}

export default connect(state => ({
  state,
}),
dispatch => ({
  actions: bindActionCreators(updateBalance, dispatch),
}),
)(FinanceManager);
