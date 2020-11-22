import * as actionTypes from './actionsTypes';
import axios from 'axios';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (tokenId, designationId, full_nameId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: tokenId,
    designation: designationId,
    name: full_nameId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('cookies');
  localStorage.removeItem('full_name');
  localStorage.removeItem('designation');
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const auth = (user_name, pwd) => {
  return (dispatch) => {
    dispatch(authStart());
    var postData = JSON.stringify({
      username: user_name,
      password: pwd,
    });

    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    };

    axios
      .post(
        'https://mis2020.herokuapp.com/rest-auth/login/',
        postData,
        axiosConfig
      )
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('designation', res.data.designation);
        localStorage.setItem('full_name', res.data.full_name);
        localStorage.setItem('cookies', 'no');
        dispatch(
          authSuccess(res.data.token, res.data.designation, res.data.full_name)
        );
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};

export const authCheckStatus = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    const designation = localStorage.getItem('designation');
    const full_name = localStorage.getItem('full_name');
    if (!token) {
      dispatch(logout());
    } else {
      dispatch(authSuccess(token, designation, full_name));
    }
  };
};
