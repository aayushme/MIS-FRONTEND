import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';


const initialState = {
    project_data:[],
    error:null
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




const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
       
       
        case actionTypes.GET_PROJECT_DETAILS_SUCCESS: return getProjectDetailsSuccess(state, action);
        case actionTypes.GET_PROJECT_DETAILS_ERROR: return getProjectDetailsFail(state, action);

        default:
            return state;
    }
};

export default reducer;