import { GET_TRANSACTION_DATA, LOADING_TRANSACTION_DATA, DONE_LOADING_TRANSACTION_DATA } from '../actions/balanceSheetActions';

const initialState = { isLoading: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_TRANSACTION_DATA:
      return { ...state, isLoading: true };
    case DONE_LOADING_TRANSACTION_DATA:
      return { ...state, isLoading: false };
    case GET_TRANSACTION_DATA:
       let currentData = state.data || []
       let newData = action.payload.transactions.map(transaction => {
          for(var key in transaction) {
            transaction[ key.toLowerCase() ] = transaction[key];
            delete transaction[key];
          }
          return transaction;
        })

      return {
        ...state,
        data: currentData.concat(newData)
      }
    default:
      return state;
  }
};
