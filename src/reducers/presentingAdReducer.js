import * as type from '../actions/actionTypes';
import initialState from './initialState';

export default function PresentingAdReducer(state = initialState.presentingAd, action) {
    switch (action.type) {
        case type.LOAD_PRESENTING_AD_SUCCESS:
            return action.presentingAd;
        default:
            return state;
    }
}