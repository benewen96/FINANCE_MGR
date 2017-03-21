/*
 * action types
 */

export const UPDATE_BALANCE = 'UPDATE_BALANCE';


/*
 * action creators
 */

const updateBalance = balance => ({ type: UPDATE_BALANCE, balance });

export {
  updateBalance,
};
