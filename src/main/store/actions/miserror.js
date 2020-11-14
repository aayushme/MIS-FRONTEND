import * as actionTypes from './actionsTypes'
import axios from 'axios'

export const misErrorSuccess = (dataT) =>{
  return {
      type :actionTypes.MIS_ERROR_GET_SUCCESS,
      error_data:dataT
  }
}

export const misErrorFail = (error) =>{
  return {
      type : actionTypes.MIS_ERROR_GET_ERROR,
      error : error
  }
}



export const getMisError = (token,id) =>{
    return dispatch =>{
        
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization' : 'Token ' +token 
    }
    };

    axios
      .get("https://mis2020.herokuapp.com/api/mis/excel_errors/?excel="+id,axiosConfig
      )
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        dispatch(misErrorSuccess(res.data));
        
      })
      .catch((err) => {
        dispatch(misErrorFail(err));
      })

    }
}