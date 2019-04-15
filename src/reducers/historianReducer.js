import * as type from '../actions/actionTypes';
import initialState from './initialState';

export default function HistorianReducer(state = initialState.historian, action) {
    switch (action.type) {
        case type.LOAD_HISTORIAN_SUCCESS:
            return action.historian;
        default:
            return state;
    }
}