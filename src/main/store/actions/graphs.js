import * as actionTypes from './actionsTypes';
import axios from 'axios';

/*================Get Count By Center=====================*/

export const countByCenterSuccess = (dataT) => {
  return {
    type: actionTypes.GET_GRAPH_COUNT_BY_CENTER_TYPE_SUCCESS,
    count_by_center_data: dataT,
  };
};

export const countByCenterFail = (error) => {
  return {
    type: actionTypes.GET_GRAPH_COUNT_BY_CENTER_TYPE_ERROR,
    error: error,
  };
};

export const getCountByCenter = (token) => {
  return (dispatch) => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Token ' + token,
      },
    };

    axios
      .get(
        'https://mis2020.herokuapp.com/api/mis/count-by-centre-type/',
        axiosConfig
      )
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res);
        dispatch(countByCenterSuccess(res.data));
      })
      .catch((err) => {
        dispatch(countByCenterFail(err));
      });
  };
};

/*================Get Count By Installation=====================*/

export const countByInstallationSuccess = (dataT) => {
  return {
    type: actionTypes.GET_GRAPH_COUNT_BY_INSTALLATION_SUCCESS,
    count_by_installation_data: dataT,
  };
};

export const countByInstallationFail = (error) => {
  return {
    type: actionTypes.GET_GRAPH_COUNT_BY_INSTALLATION_ERROR,
    error: error,
  };
};

export const getCountByInstallation = (token) => {
  return (dispatch) => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Token ' + token,
      },
    };

    axios
      .get(
        'https://mis2020.herokuapp.com/api/mis/count-by-installation-status/',
        axiosConfig
      )
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res);
        dispatch(countByInstallationSuccess(res.data));
      })
      .catch((err) => {
        dispatch(countByInstallationFail(err));
      });
  };
};

/*================Get Count By QC Status=====================*/

export const countByQCSuccess = (dataT) => {
  return {
    type: actionTypes.GET_GRAPH_COUNT_BY_QC_SUCCESS,
    count_by_qc_data: dataT,
  };
};

export const countByQCFail = (error) => {
  return {
    type: actionTypes.GET_GRAPH_COUNT_BY_QC_ERROR,
    error: error,
  };
};

export const getCountByQC = (token) => {
  return (dispatch) => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Token ' + token,
      },
    };

    axios
      .get(
        'https://mis2020.herokuapp.com/api/mis/count-by-qc-status/',
        axiosConfig
      )
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res);
        dispatch(countByQCSuccess(res.data));
      })
      .catch((err) => {
        dispatch(countByQCFail(err));
      });
  };
};

/*================Get Count By Mock Status=====================*/

export const countByMockSuccess = (dataT) => {
  return {
    type: actionTypes.GET_GRAPH_COUNT_BY_MOCK_SUCCESS,
    count_by_mock_data: dataT,
  };
};

export const countByMockFail = (error) => {
  return {
    type: actionTypes.GET_GRAPH_COUNT_BY_MOCK_ERROR,
    error: error,
  };
};

export const getCountByMock = (token) => {
  return (dispatch) => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Token ' + token,
      },
    };

    axios
      .get(
        'https://mis2020.herokuapp.com/api/mis/count-by-mock-status/',
        axiosConfig
      )
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res);
        dispatch(countByMockSuccess(res.data));
      })
      .catch((err) => {
        dispatch(countByMockFail(err));
      });
  };
};
