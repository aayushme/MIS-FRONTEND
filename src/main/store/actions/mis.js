import * as actionTypes from './actionsTypes';
import axios from 'axios';

/*=================== MIS UPLOAD =====================*/

export const misUploadSuccess = (statusIs) => {
  return {
    type: actionTypes.MIS_UPLOAD_SHEET_SUCCESS,
    statusId: statusIs,
  };
};

export const misUploadFail = (error) => {
  return {
    type: actionTypes.MIS_UPLOAD_SHEET_FAIL,
    error: error,
  };
};

export const misUpload = (token, excel_file) => {
  return (dispatch) => {
    const data = new FormData();
    data.append('file', excel_file);
    console.log(excel_file);
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Token ' + token,
      },
    };

    axios
      .post('https://mis2020.herokuapp.com/api/mis/excel/', data, axiosConfig)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res);
        dispatch(misUploadSuccess(res.data.id));
      })
      .catch((err) => {
        dispatch(misUploadFail(err));
      });
  };
};

/*=================== MIS GET =====================*/

export const misGetSuccess = (dataT) => {
  return {
    type: actionTypes.MIS_GET_SUCCESS,
    data: dataT,
    loading: false,
  };
};

export const misGetStart = () => {
  return {
    type: actionTypes.MIS_GET_START,
    loading: true,
  };
};

export const misGetFail = (error) => {
  return {
    type: actionTypes.MIS_GET_ERROR,
    error: error,
    loading: false,
  };
};

export const misGet = (token) => {
  return (dispatch) => {
    dispatch(misGetStart());
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Token ' + token,
      },
    };

    axios
      .get('https://mis2020.herokuapp.com/api/mis/excel/', axiosConfig)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res.data);
        dispatch(misGetSuccess(res.data));
      })
      .catch((err) => {
        dispatch(misUploadFail(err));
      });
  };
};
