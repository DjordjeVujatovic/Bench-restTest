import { GET_TRANSACTION_DATA, LOADING_TRANSACTION_DATA, DONE_LOADING_TRANSACTION_DATA } from '../actions/balanceSheetActions';

const initialState = { isLoading: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_TRANSACTION_DATA:
      return { ...state, isLoading: true };
    case DONE_LOADING_TRANSACTION_DATA:
      return { ...state, isLoading: false };
    case GET_TRANSACTION_DATA:
      const currentData = state.data || [];

      /*
       The keys inside of the data that is being received from the JSON REST API are not lower-cased.
       This function maps over the transactions inside of the JSON data, and converts the keys
       to lower case.
      */

      const newData = action.payload.transactions.map((transaction) => {
        for (const key in transaction) {
          transaction[key.toLowerCase()] = transaction[key];
          delete transaction[key];
        }
        return { ...transaction };
      });

      /*
       This reduce function loops over all of the amount data inside of transactions
       and adds them up to a grand total.
      */

      const totalAmount = currentData.concat(newData).reduce((sum, transaction) => {
        return sum + parseFloat(transaction.amount, 10);
      }, 0);
      return {
        ...state,
        data: currentData.concat(newData),
        totalAmount,
      };
    default:
      return state;
  }
};
