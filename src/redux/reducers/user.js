// Esse reducer será responsável por tratar as informações da pessoa usuária
import INITIAL_STATE from '../initialState';

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'NEW_LOGIN':
    return { ...INITIAL_STATE, user: { email: action.user.email } };
  default:
    return state;
  }
}

export default user;
