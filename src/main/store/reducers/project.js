import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
  project_data: [],
  error: null,
  user_data_pc: [],
  user_data_zm: [],
  code: [],
  postinfo: null,
};

/*===============Get Projects================*/

const getProjectDetailsSuccess = (state, action) => {
  return updateObject(state, {
    project_data: action.project_data,
    error: null,
    loading: false,
  });
};

const getProjectDetailsFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

/*===============Get PC Users================*/

const getPCSuccess = (state, action) => {
  return updateObject(state, {
    user_data_pc: action.user_data_pc,
    error: null,
    loading: false,
  });
};

const getPCFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

/*===============Get ZM Users================*/

const getZMSuccess = (state, action) => {
  return updateObject(state, {
    user_data_zm: action.user_data_zm,
    error: null,
    loading: false,
  });
};

const getZMFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

/*===============Put Projects================*/

const putProjectsSuccess = (state, action) => {
  return updateObject(state, {
    code: action.code,
    error: null,
    loading: false,
  });
};

const putProjectsFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

/*===============Post Projects Zone Wise================*/

const postZoneWiseSuccess = (state, action) => {
  return updateObject(state, {
    postinfo: action.info,
    error: null,
    loading: false,
  });
};

const postZoneWiseFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PROJECT_DETAILS_SUCCESS:
      return getProjectDetailsSuccess(state, action);
    case actionTypes.GET_PROJECT_DETAILS_ERROR:
      return getProjectDetailsFail(state, action);

    case actionTypes.PUT_PROJECT_SUCCESS:
      return putProjectsSuccess(state, action);
    case actionTypes.PUT_PROJECT_ERROR:
      return putProjectsFail(state, action);

    case actionTypes.GET_PC_SUCCESS:
      return getPCSuccess(state, action);
    case actionTypes.GET_PC_ERROR:
      return getPCFail(state, action);

    case actionTypes.GET_ZM_SUCCESS:
      return getZMSuccess(state, action);
    case actionTypes.GET_ZM_ERROR:
      return getZMFail(state, action);

    case actionTypes.POST_PROJECT_ZONE_WISE_SUCCESS:
      return postZoneWiseSuccess(state, action);
    case actionTypes.POST_PROJECT_ZONE_WISE_ERROR:
      return postZoneWiseFail(state, action);

    default:
      return state;
  }
};

export default reducer;
