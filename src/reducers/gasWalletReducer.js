import * as type from '../actions/actionTypes';
import initialState from './initialState';

export default function GasWalletReducer(gasWallets = initialState.gasWallets,action) {
    switch (action.type) {
        case type.LOAD_WALLET:
            return Object.assign({}, gasWallets, {gasWallets: action.gasWallets});
        default:
            return gasWallets;
    }
}
