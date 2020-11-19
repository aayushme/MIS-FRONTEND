import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
  error_data: [],
  error: null,
  loading: true,
};

const misErrorSuccess = (state, action) => {
  return updateObject(state, {
    error_data: action.error_data,
    error: null,
    loading: false,
  });
};

const misErrorFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MIS_ERROR_GET_SUCCESS:
      return misErrorSuccess(state, action);
    case actionTypes.MIS_ERROR_GET_ERROR:
      return misErrorFail(state, action);

    default:
      return state;
  }
};

export default reducer;
