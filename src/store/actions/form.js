import * as actionTypes from './actionTypes';

export const fetchForm = (params) => {
  return {
    type: actionTypes.FETCH_FORM,
    params
  }
}

export const editForm = (name, value) => {
  return {
    type: actionTypes.EDIT_FORM,
    action: { name, value }
  }
}