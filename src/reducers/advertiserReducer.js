import * as type from '../actions/actionTypes';
import initialState from './initialState';

export default function AdvertiserReducer(state = initialState.advertiser, action) {
    switch (action.type) {
        case type.LOAD_ADVERTISER_SUCCESS:
            return action.advertiser;
        case type.CREATE_ADVERTISER_SUCCESS:
            return action.advertiser;
        default:
            return state;
    }
}
