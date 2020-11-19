import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
  name: null,
  file: null,
  id: null,
  data: [],
  statusId: null,
};

/*================== MIS Upload ==================*/

const misUploadSuccess = (state, action) => {
  return updateObject(state, {
    statusId: action.statusId,
    error: null,
    loading: false,
  });
};

const misUploadFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

/*================== MIS Get ==================*/

const misGetSuccess = (state, action) => {
  return updateObject(state, {
    data: action.data,
    error: null,
    loading: false,
  });
};

const misGetStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const misGetFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MIS_UPLOAD_SHEET_SUCCESS:
      return misUploadSuccess(state, action);
    case actionTypes.MIS_UPLOAD_SHEET_FAIL:
      return misUploadFail(state, action);
    case actionTypes.MIS_GET_SUCCESS:
      return misGetSuccess(state, action);
    case actionTypes.MIS_GET_ERROR:
      return misGetFail(state, action);
    case actionTypes.MIS_GET_START:
      return misGetStart(state, action);

    default:
      return state;
  }
};

export default reducer;
