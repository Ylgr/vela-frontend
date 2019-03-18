import * as types from './actionTypes';
import apiResult from '../api/apiResult';
import gasTransferApi from '../api/gasTransferApi';
import {loadWallet} from './gasWalletActions';


export function transferGasSuccess(gas) {
    return {type: types.GAS_TRANFER_SUCCESS, gas}
}

export function transferGas(data) {
    return function (dispatch) {
        return gasTransferApi.transfer(data).then(gasWallet => {
            const response = apiResult.success(gasWallet);
            dispatch(transferGasSuccess(response));
            //dispatch(loadWallet(getSecondPart(data.sender))) // load this wallet again
        }).catch(error => {
            throw (error);
        });
    };
}
function getSecondPart(str) {
    return str.split('#')[1];
}
