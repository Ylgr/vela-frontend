import * as type from '../actions/actionTypes';
import initialState from './initialState';

export default function PingReducer(state = initialState.ping, action) {
    switch (action.type) {
        case type.LOAD_PING_SUCCESS:
            return action.ping;
        default:
            return state;
    }
}