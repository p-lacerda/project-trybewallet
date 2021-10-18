// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
};

export default function wallet(state = initialState, action) {
  switch (action.type) {
  case 'GET_CURR':
    return { ...state, currencies: action.data };
  default:
    return state;
  }
}
