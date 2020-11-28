import * as actionTypes from './actionsTypes';
import axios from 'axios';

/*===============Get Projects================*/

export const getProjectDetailsSuccess = (dataT) => {
  return {
    type: actionTypes.GET_PROJECT_DETAILS_SUCCESS,
    project_data: dataT,
  };
};

export const getProjectDetailsFail = (error) => {
  return {
    type: actionTypes.GET_PROJECT_DETAILS_ERROR,
    error: error,
  };
};

export const getProjectDetails = (token) => {
  return (dispatch) => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Token ' + token,
      },
    };

    axios
      .get('https://mis2020.herokuapp.com/api/mis/projects/', axiosConfig)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res);
        dispatch(getProjectDetailsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getProjectDetailsFail(err));
      });
  };
};

/*==============Put Projects================*/

export const putProjectsSuccess = (dataT) => {
  return {
    type: actionTypes.PUT_PROJECT_SUCCESS,
    code: dataT,
  };
};

export const putProjectsFail = (error) => {
  return {
    type: actionTypes.PUT_PROJECT_ERROR,
    error: error,
  };
};

export const putProjectsPC = (token, id, username) => {
  return (dispatch) => {
    let data = JSON.stringify({
      pc: username,
    });

    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Token ' + token,
      },
    };

    axios
      .patch(
        'https://mis2020.herokuapp.com/api/mis/projects/' + id + '/',
        data,
        axiosConfig
      )
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res);
        dispatch(putProjectsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(putProjectsFail(err));
      });
  };
};
export const putProjectsZM = (token, id, username) => {
  return (dispatch) => {
    let data = JSON.stringify({
      zm: username,
    });

    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Token ' + token,
      },
    };

    axios
      .patch(
        'https://mis2020.herokuapp.com/api/mis/projects/' + id + '/',
        data,
        axiosConfig
      )
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res);
        dispatch(putProjectsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(putProjectsFail(err));
      });
  };
};

/*===============Get Users Of ZM================*/

export const getPCSuccess = (dataT) => {
  return {
    type: actionTypes.GET_PC_SUCCESS,
    user_data_pc: dataT,
  };
};

export const getPCFail = (error) => {
  return {
    type: actionTypes.GET_PC_ERROR,
    error: error,
  };
};

export const getPC = (token) => {
  return (dispatch) => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Token ' + token,
      },
    };

    axios
      .get('https://mis2020.herokuapp.com/api/core/all-pc/', axiosConfig)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res.data);
        dispatch(getPCSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getPCFail(err));
      });
  };
};

/*===============Get Users Of PM================*/

export const getZMSuccess = (dataT) => {
  return {
    type: actionTypes.GET_ZM_SUCCESS,
    user_data_zm: dataT,
  };
};

export const getZMFail = (error) => {
  return {
    type: actionTypes.GET_ZM_ERROR,
    error: error,
  };
};

export const getZM = (token) => {
  return (dispatch) => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Token ' + token,
      },
    };

    axios
      .get('https://mis2020.herokuapp.com/api/core/all-zm/', axiosConfig)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res);
        dispatch(getZMSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getZMFail(err));
      });
  };
};

/*===============Post Users To Projects Zone Wise================*/

export const postZoneWiseSuccess = (dataT) => {
  return {
    type: actionTypes.POST_PROJECT_ZONE_WISE_SUCCESS,
    user_data_zm: dataT,
  };
};

export const postZoneWiseFail = (error) => {
  return {
    type: actionTypes.POST_PROJECT_ZONE_WISE_ERROR,
    error: error,
  };
};

export const postZoneWise = (token, zone, zm) => {
  return (dispatch) => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Token ' + token,
      },
    };

    let data = JSON.stringify({
      zone: zone,
      zm: zm,
    });

    axios
      .post(
        'http://mis2020.herokuapp.com/api/mis/allot-pc-city-wise/',
        data,
        axiosConfig
      )
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res);
        dispatch(postZoneWiseSuccess(res.data));
      })
      .catch((err) => {
        dispatch(postZoneWiseFail(err));
      });
  };
};
