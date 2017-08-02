import { combineReducers } from 'redux';
import balanceSheetReducer from './reducers/balanceSheetReducer';

const combinedReducers = combineReducers({
  balanceSheetData: balanceSheetReducer,
});

export default combinedReducers;
