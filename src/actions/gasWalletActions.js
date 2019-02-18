import * as types from './actionTypes';
import gasWalletApi from '../api/gasWalletApi';
import apiResult from '../api/apiResult';


export function loadWalletSuccess(gasWallets) {
    return {type: types.LOAD_WALLET_SUCCESS, gasWallets}
}

export function loadWallet() {
    return function (dispatch) {
        return gasWalletApi.get().then(gasWallets => {
            const response = apiResult.success(gasWallets);
            dispatch(loadWalletSuccess(response));
        }).catch(error => {
            throw (error);
        });
    };
}

