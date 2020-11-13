import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';


const initialState = {
    name:null,
    file:null,
    id:null,
    data:[]
};


const misUploadSuccess = (state, action) => {

    return updateObject( state, { 
        status:action.status,
        error: null,
        loading: false
     } );
};

const misUploadFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};
const misGetSuccess = (state, action) => {

    return updateObject( state, { 
        data:action.data,
        error: null,
        loading: false
     } );
};

const misGetFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};




const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
       
        case actionTypes.MIS_UPLOAD_SHEET_SUCCESS: return misUploadSuccess(state, action);
        case actionTypes.MIS_UPLOAD_SHEET_FAIL: return misUploadFail(state, action);
        case actionTypes.MIS_GET_SUCCESS: return misGetSuccess(state, action);
        case actionTypes.MIS_GET_ERROR: return misGetFail(state, action);

        default:
            return state;
    }
};

export default reducer;