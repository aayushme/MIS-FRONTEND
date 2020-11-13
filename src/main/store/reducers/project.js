import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';


const initialState = {
    project_data:[],
    error:null,
    user_data_pm:[],
    user_data_zm:[]
};



const getProjectDetailsSuccess = (state, action) => {

    return updateObject( state, { 
        project_data:action.project_data,
        error: null,
        loading: false
     } );
};

const getProjectDetailsFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};


const getPMSuccess = (state, action) => {

    return updateObject( state, { 
        user_data_pm:action.user_data_pm,
        error: null,
        loading: false
     } );
};

const getPMFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};


const getZMSuccess = (state, action) => {

    return updateObject( state, { 
        user_data_zm:action.user_data_zm,
        error: null,
        loading: false
     } );
};

const getZMFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};




const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
       
       
        case actionTypes.GET_PROJECT_DETAILS_SUCCESS: return getProjectDetailsSuccess(state, action);
        case actionTypes.GET_PROJECT_DETAILS_ERROR: return getProjectDetailsFail(state, action);

        case actionTypes.GET_PM_SUCCESS:return getPMSuccess(state,action);
        case actionTypes.GET_PM_ERROR:return getPMFail(state,action);

        case actionTypes.GET_ZM_SUCCESS:return getZMSuccess(state,action);
        case actionTypes.GET_ZM_ERROR:return getZMFail(state,action);

        default:
            return state;
    }
};

export default reducer;