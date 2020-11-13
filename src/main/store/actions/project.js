import * as actionTypes from './actionsTypes'
import axios from 'axios'

/*===============Get Projects================*/ 

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


/*===============Get Users Of ZM================*/ 

export const getPMSuccess = (dataT) =>{
  return {
      type :actionTypes.GET_PM_SUCCESS,
      user_data_pm:dataT
  }
}

export const getPMFail = (error) =>{
  return {
      type : actionTypes.GET_PM_ERROR,
      error : error
  }
}



export const getPM = (token) =>{
    return dispatch =>{
        
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    }
    };

    axios
      .get("https://mis2020.herokuapp.com/api/core/all-pm/",axiosConfig
      )
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res.data);
        dispatch(getPMSuccess(res.data));
        
      })
      .catch((err) => {
        dispatch(getPMFail(err));
      })

    }
}

/*===============Get Users Of PM================*/ 

export const getZMSuccess = (dataT) =>{
  return {
      type :actionTypes.GET_ZM_SUCCESS,
      user_data_zm:dataT
  }
}

export const getZMFail = (error) =>{
  return {
      type : actionTypes.GET_ZM_ERROR,
      error : error
  }
}



export const getZM = (token) =>{
    return dispatch =>{
        
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    }
    };

    axios
      .get("https://mis2020.herokuapp.com/api/core/all-zm/",axiosConfig
      )
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        dispatch(getZMSuccess(res.data));
        
      })
      .catch((err) => {
        dispatch(getZMFail(err));
      })

    }
}
