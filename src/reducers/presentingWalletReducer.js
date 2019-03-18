import * as type from '../actions/actionTypes';
import initialState from './initialState';

export default function PresentingWalletReducer(state = initialState.presentingWallet, action) {
    switch (action.type) {
        case type.LOAD_PRESENTING_WALLET_SUCCESS:
            return action.presentingWallet;
        default:
            return state;
    }
}