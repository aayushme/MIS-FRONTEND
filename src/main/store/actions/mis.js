import * as actionTypes from './actionsTypes'
import axios from 'axios'

export const misUploadSuccess = (tokenId,designationId,full_nameId) =>{
    return {
        type :actionTypes.MIS_UPLOAD_SHEET_SUCCESS,
        token : tokenId,
        designation : designationId,
        name : full_nameId

    }
}

export const misUploadFail = (error) =>{
    return {
        type : actionTypes.MIS_UPLOAD_SHEET_FAIL,
        error : error
    }
}

export const misUpload = (token,excel_file) =>{
    return dispatch =>{
        
    let data_upload = {
        'file' : excel_file
    }
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': 'Bearer '+token
    }
    };

    axios
      .post("https://mis2020.herokuapp.com/api/excel/",data_upload,axiosConfig
      )
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        dispatch(misUploadSuccess(res.data.token,res.data.designation,res.data.full_name));
        
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
        'Authorization': 'Bearer '+token
    }
    };

    axios
      .post("https://mis2020.herokuapp.com/api/excel/",data_upload,axiosConfig
      )
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        dispatch(misUploadSuccess(res.data.token,res.data.designation,res.data.full_name));
        
      })
      .catch((err) => {
        dispatch(misUploadFail(err));
      })

    }
}