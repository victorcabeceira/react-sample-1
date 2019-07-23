import * as actionTypes from '../actions/actionTypes';

const initialState = {
  form: {
    name: 'Victor',
    age: '',
    multiline: 'Controlled',
    select: 'EUR',
    password: ''
  },
  loading: false,
};

const fetchForm = (state, _) => {
  return state;
}

const editForm = (state, action) => {
  const newForm = { ...state.data };
  newForm[action.name] = action.value;

  return {
    ...state,
    form: newForm
  };

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FORM: return fetchForm(state, action);
    case actionTypes.EDIT_FORM: return editForm(state, action);
    default:
      return state;
  }
}

export default reducer;
