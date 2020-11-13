import * as actionTypes from './actionsTypes'
import axios from 'axios'

export const misUploadSuccess = (statusIs) =>{
    return {
        type :actionTypes.MIS_UPLOAD_SHEET_SUCCESS,
        status:statusIs

    }
}
export const misGetSuccess = (dataT) =>{
  return {
      type :actionTypes.MIS_GET_SUCCESS,
      data:dataT
  }
}


export const misUploadFail = (error) =>{
    return {
        type : actionTypes.MIS_UPLOAD_SHEET_FAIL,
        error : error
    }
}
export const misGetFail = (error) =>{
  return {
      type : actionTypes.MIS_GET_ERROR,
      error : error
  }
}

export const misUpload = (token,excel_file) =>{
    return dispatch =>{
        
    const data = new FormData(); 
    data.append('file', excel_file)
    console.log(excel_file);
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    }
    };

    axios
      .post("https://mis2020.herokuapp.com/api/mis/excel/",data,axiosConfig
      )
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res.data);
        dispatch(misUploadSuccess(res.data.name));
        
      })
      .catch((err) => {
        dispatch(misUploadFail(err));
      })

    }
}

export const misGet = (token) =>{
    return dispatch =>{
    
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    }
    };

    axios
      .get("https://mis2020.herokuapp.com/api/mis/excel/",axiosConfig
      )
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res.data);
        dispatch(misGetSuccess(res.data));
        
      })
      .catch((err) => {
        dispatch(misUploadFail(err));
      })

    }
}