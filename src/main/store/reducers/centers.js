import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
  center_data: [],
  error: null,
  loading: true,
};

const getCenterSuccess = (state, action) => {
  return updateObject(state, {
    center_data: action.center_data,
    error: false,
  });
};

const getCenterFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const deleteCenterSuccess = (state, action) => {
  return updateObject(state, {
    deleteCenterStatus: action.deleteCenterStatus,
    error: null,
    loading: false,
  });
};

const deleteCenterFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CENTERS_SUCCESS:
      return getCenterSuccess(state, action);
    case actionTypes.GET_CENTERS_ERROR:
      return getCenterFail(state, action);
    case actionTypes.DELETE_CENTERS_SUCCESS:
      return deleteCenterSuccess(state, action);
    case actionTypes.DELETE_CENTERS_ERROR:
      return deleteCenterFail(state, action);

    default:
      return state;
  }
};

export default reducer;
