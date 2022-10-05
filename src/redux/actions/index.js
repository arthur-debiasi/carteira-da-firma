// Coloque aqui suas actions
const NEW_EMAIL = 'NEW_EMAIL';
const TRY_REQUEST = 'TRY_REQUEST';
const FETCH_API = 'FETCH_API';
const FETCH_QUOTATION = 'FETCH_QUOTATION';
const GOT_RESPONSE = 'GOT_RESPONSE';
const ADD_EXPENSE = 'ADD_EXPENSE';
const DELETE_EXPENSE = 'DELETE_EXPENSE';
const ID_TO_EDIT = 'ID_TO_EDIT';
const EDIT_EXPENSE = 'EDIT_EXPENSE';

const addExpense = (payload) => ({ type: ADD_EXPENSE, payload });

const deleteExpense = (payload) => ({ type: DELETE_EXPENSE, payload });

const newLogin = (payload) => ({ type: NEW_EMAIL, payload });

const tryRequest = () => ({ type: TRY_REQUEST });

const fetchAPI = (payload) => ({ type: FETCH_API, payload });

const fetchCurrencies = (payload) => ({ type: FETCH_QUOTATION, payload });

const gotResponse = () => ({ type: GOT_RESPONSE });

const idToEditAction = (payload) => ({ type: ID_TO_EDIT, payload, editor: true });

const editExpenseAction = (payload) => ({ type: EDIT_EXPENSE, payload, editor: false });

const fetchCurrency = () => async (dispatch) => {
  dispatch(tryRequest());
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await response.json();
    delete result.USDT;
    dispatch(fetchAPI(Object.keys(result)));
    dispatch(gotResponse());
  } catch (e) {
    throw new Error(e);
  }
};

const fetchQuotation = (expense) => async (dispatch) => {
  dispatch(tryRequest());
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await response.json();
    expense.exchangeRates = result;
    dispatch(fetchCurrencies(expense));
    dispatch(gotResponse());
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

export {
  addExpense,
  newLogin,
  fetchCurrency,
  fetchQuotation,
  deleteExpense,
  idToEditAction,
  editExpenseAction,
};
