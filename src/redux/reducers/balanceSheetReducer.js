import { GET_TRANSACTION_DATA, LOADING_TRANSACTION_DATA, DONE_LOADING_TRANSACTION_DATA } from '../actions/balanceSheetActions';

const initialState = { isLoading: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_TRANSACTION_DATA:
      return { ...state, isLoading: true };
    case DONE_LOADING_TRANSACTION_DATA:
      return { ...state, isLoading: false };
    case GET_TRANSACTION_DATA:
       let currentData = state.data || [];
       let newData = action.payload.transactions.map(transaction => {
          for(const key in transaction) {
            transaction[key.toLowerCase()] = transaction[key];
            delete transaction[key];
          }
          return {...transaction};
        })
       let totalAmount = currentData.concat(newData).reduce((sum, transaction) => {
          return sum + parseFloat(transaction.amount, 10);
       }, 0)
      return {
        ...state,
        data: currentData.concat(newData),
        totalAmount: totalAmount
      };
    default:
      return state;
  }
};
