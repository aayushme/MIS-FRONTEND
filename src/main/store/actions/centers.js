import * as actionTypes from './actionsTypes';
import axios from 'axios';

/*=============Get Centers=========================*/

export const getCentersSuccess = (dataT) => {
  return {
    type: actionTypes.GET_CENTERS_SUCCESS,
    center_data: dataT,
    loading: false,
  };
};

export const getCentersFail = (error) => {
  return {
    type: actionTypes.GET_CENTERS_ERROR,
    error: error,
    loading: true,
  };
};

export const getCenters = (token) => {
  return (dispatch) => {
    console.log('this is token' + token);
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Token ' + token,
      },
    };

    axios
      .get('https://mis2020.herokuapp.com/api/centre/centres/', axiosConfig)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res);
        localStorage.setItem('centerdata', res.data);
        dispatch(getCentersSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getCentersFail(err));
      });
  };
};

/*================Delete Centers=========================*/

export const deleteCentersSuccess = (dataT) => {
  return {
    type: actionTypes.DELETE_CENTERS_SUCCESS,
    deleteCenterStatus: true,
    loading: false,
  };
};

export const deleteCentersFail = (error) => {
  return {
    type: actionTypes.DELETE_CENTERS_ERROR,
    error: error,
  };
};

export const deleteCenters = (token, id) => {
  return (dispatch) => {
    let data = JSON.stringify({
      removed: true,
    });

    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Token ' + token,
      },
    };

    axios
      .patch(
        'https://mis2020.herokuapp.com/api/centre/all-centres/' + id + '/',
        data,
        axiosConfig
      )
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res);
        dispatch(deleteCentersSuccess(res.data));
      })
      .catch((err) => {
        dispatch(deleteCentersFail(err));
      });
  };
};
