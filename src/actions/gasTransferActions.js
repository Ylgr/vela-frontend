import * as types from './actionTypes';
import apiResult from '../api/apiResult';
import gasTransferApi from '../api/gasTransferApi';

export function transferGasSuccess(gas) {
    return {type: types.GAS_TRANFER_SUCCESS, gas}
}

export function transferGas(data) {
    return function (dispatch) {
        return gasTransferApi.transfer(data).then(gasWallet => {
            const response = apiResult.success(gasWallet);
            dispatch(transferGasSuccess(response));
        }).catch(error => {
            throw (error);
        });
    };
}
