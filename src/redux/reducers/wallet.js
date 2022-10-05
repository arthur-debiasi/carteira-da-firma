// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const TRY_REQUEST = 'TRY_REQUEST';
const FETCH_API = 'FETCH_API';
const FETCH_QUOTATION = 'FETCH_QUOTATION';
const GOT_RESPONSE = 'GOT_RESPONSE';
const DELETE_EXPENSE = 'DELETE_EXPENSE';
const ID_TO_EDIT = 'ID_TO_EDIT';
const EDIT_EXPENSE = 'EDIT_EXPENSE';

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case TRY_REQUEST:
    console.log('tentativa de requisição...');
    return state;
  case GOT_RESPONSE:
    console.log('sucesso de requisição!');
    return state;
  case DELETE_EXPENSE:
    return { ...state, expenses: action.payload };
  case FETCH_API:
    return { ...state, currencies: action.payload };
  case FETCH_QUOTATION:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case ID_TO_EDIT:
    return { ...state, idToEdit: action.payload, editor: action.editor };
  case EDIT_EXPENSE:
    return { ...state, expenses: action.payload, editor: action.editor };
  default:
    return state;
  }
}

export default wallet;
