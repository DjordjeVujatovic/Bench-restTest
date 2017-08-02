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

const endpoint = 'http://resttest.bench.co/transactions/4.json';

export const fetchTransactionData = () => (dispatch) => {
  dispatch(loadingTransactionData());
  fetch(endpoint)
    .then(response => response.json())
    .then((data) => {
      dispatch(getTransactionData(data));
      dispatch(doneLoadingTransactionData());
    })
    .catch(error => console.log('Error fetching JSON', error));
};


