// Coloque aqui suas actions
const NEW_EMAIL = 'NEW_EMAIL';
const TRY_REQUEST = 'TRY_REQUEST';
const FETCH_API = 'FETCH_API';
const GOT_RESPONSE = 'GOT_RESPONSE';

const newLogin = (payload) => ({ type: NEW_EMAIL, payload });

const tryRequest = () => ({ type: TRY_REQUEST });

const fetchAPI = (payload) => ({ type: FETCH_API, payload });

const gotResponse = () => ({ type: GOT_RESPONSE });

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

export { newLogin, fetchCurrency };
