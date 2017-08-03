//Actions
export const LOADING_TRANSACTION_DATA = 'LOADING_TRANSACTION_DATA';
export const DONE_LOADING_TRANSACTION_DATA = 'DONE_LOADING_TRANSACTION_DATA';
export const GET_TRANSACTION_DATA = 'GET_TRANSACTION_DATA';

//Action Creators

export const getTransactionData = data => ({
  type: GET_TRANSACTION_DATA,
  payload: data,
});

export const loadingTransactionData = () => ({
  type: LOADING_TRANSACTION_DATA,
  payload: null,
});

export const doneLoadingTransactionData = () => ({
  type: DONE_LOADING_TRANSACTION_DATA,
  payload: null,
});

// Fetch Data from API

const endpoint = 'http://resttest.bench.co/transactions/';

export const fetchTransactionData = () => (dispatch) => {
  const fetchPageTransactions = function(response) {
    if(response.status === 404) {
      dispatch(doneLoadingTransactionData());
      return;
    }
    return response.json().then((data) => {
      console.log({data});
      dispatch(getTransactionData(data));
      fetch(`${endpoint}${data.page+1}.json`).then(fetchPageTransactions);
    })
  }
  dispatch(loadingTransactionData());
  fetch(`${endpoint}1.json`).then(fetchPageTransactions);
};
