import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';


const initialState = {
    count_by_center_data:'',
    count_by_installation_data:'',
    count_by_qc_data:'',
    count_by_mock_data:'',
    error:null
};

/*================Get Count By Center=====================*/

const countByCenterSuccess = (state, action) => {

    return updateObject( state, { 
        count_by_center_data:action.count_by_center_data,
        error: null,
        loading: false
     } );
};

const countByCenterFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};


/*================Get Count By Installation=====================*/

const countByInstallationSuccess = (state, action) => {

    return updateObject( state, { 
        count_by_installation_data:action.count_by_installation_data,
        error: null,
        loading: false
     } );
};

const countByInstallationFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

/*================Get Count By QC=====================*/

const countByQCSuccess = (state, action) => {

    return updateObject( state, { 
        count_by_qc_data:action.count_by_qc_data,
        error: null,
        loading: false
     } );
};

const countByQCFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

/*================Get Count By Mock=====================*/

const countByMockSuccess = (state, action) => {

    return updateObject( state, { 
        count_by_mock_data:action.count_by_mock_data,
        error: null,
        loading: false
     } );
};

const countByMockFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};


/*================Reducer=====================*/

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
       
       
        case actionTypes.GET_GRAPH_COUNT_BY_CENTER_TYPE_SUCCESS: return countByCenterSuccess(state, action);
        case actionTypes.GET_GRAPH_COUNT_BY_CENTER_TYPE_ERROR: return countByCenterFail(state, action);

        case actionTypes.GET_GRAPH_COUNT_BY_INSTALLATION_SUCCESS: return countByInstallationSuccess(state, action);
        case actionTypes.GET_GRAPH_COUNT_BY_INSTALLATION_ERROR: return countByInstallationFail(state, action);

        case actionTypes.GET_GRAPH_COUNT_BY_QC_SUCCESS: return countByQCSuccess(state, action);
        case actionTypes.GET_GRAPH_COUNT_BY_QC_ERROR: return countByQCFail(state, action);

        case actionTypes.GET_GRAPH_COUNT_BY_MOCK_SUCCESS: return countByMockSuccess(state, action);
        case actionTypes.GET_GRAPH_COUNT_BY_MOCK_ERROR: return countByMockFail(state, action);

        default:
            return state;
    }
};

export default reducer;