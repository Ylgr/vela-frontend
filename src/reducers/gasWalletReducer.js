import * as type from '../actions/actionTypes';
import initialState from './initialState';

export default function GasWalletsReducer(state = initialState.gasWallet, action) {
    switch (action.type) {
        case type.LOAD_WALLET_SUCCESS:
            return action.gasWallet;
        default:
            return state;
    }
}
