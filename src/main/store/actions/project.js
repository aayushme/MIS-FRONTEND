import * as actionTypes from './actionsTypes'
import axios from 'axios'

export const getProjectDetailsSuccess = (dataT) =>{
  return {
      type :actionTypes.GET_PROJECT_DETAILS_SUCCESS,
      project_data:dataT
  }
}

export const getProjectDetailsFail = (error) =>{
  return {
      type : actionTypes.GET_PROJECT_DETAILS_ERROR,
      error : error
  }
}



export const getProjectDetails = (token,id) =>{
    return dispatch =>{
        
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization' : 'Bearer ' +token 
    }
    };

    axios
      .get("https://mis2020.herokuapp.com/api/mis/projects/?user="+id,axiosConfig
      )
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        dispatch(getProjectDetailsSuccess(res.data));
        
      })
      .catch((err) => {
        dispatch(getProjectDetailsFail(err));
      })

    }
}