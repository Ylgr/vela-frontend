import * as type from '../actions/actionTypes';
import initialState from './initialState';

export default function GasWalletReducer(state = initialState.gasWallets,action) {
    switch (action.type) {
        case type.LOAD_WALLET_SUCCESS:
            return action.gasWallets;
        default:
            return state;
    }
}
