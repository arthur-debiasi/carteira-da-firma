// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '', // string que armazena o email da pessoa usuária
};

const NEW_EMAIL = 'NEW_EMAIL';

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case NEW_EMAIL:
    console.log(action.state);
    return { ...state, email: action.state };
  default:
    return state;
  }
}

export default user;
