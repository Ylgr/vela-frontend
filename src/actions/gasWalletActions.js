import * as types from './actionTypes';
import GasWalletApi from '../api/gasWalletApi';

export function loadWallet(gasWallet) {
    return {type: types.LOAD_WALLET, gasWallet}
}
