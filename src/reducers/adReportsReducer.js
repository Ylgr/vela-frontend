import * as type from '../actions/actionTypes';
import initialState from './initialState';

export default function AdReportsReducer(state = initialState.adReports, action) {
    switch (action.type) {
        case type.LOAD_ADS_SUCCESS:
            return action.adReports;
        case type.CREATE_AD_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.adReport)
            ];
        default:
            return state;
    }
}