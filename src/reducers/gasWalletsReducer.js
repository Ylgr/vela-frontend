import * as type from '../actions/actionTypes';
import initialState from './initialState';

export default function GasWalletsReducer(state = initialState.gasWallets, action) {
    switch (action.type) {
        case type.LOAD_WALLETS_SUCCESS:
            return action.gasWallets;
        default:
            return state;
    }
}
