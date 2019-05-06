import * as types from './actionTypes';
import apiResult from '../api/apiResult';
import transactionApi from '../api/transactionApi';
import {loadWallet} from './gasWalletActions';


export function transferGasSuccess(gas) {
    return {type: types.GAS_TRANFER_SUCCESS, gas}
}

export function transferGas(data) {
    return function (dispatch) {
        return transactionApi.transfer(data).then(gasWallet => {
            const response = apiResult.success(gasWallet);
            dispatch(transferGasSuccess(response));
            dispatch(loadWallet(getSecondPart(data.sender))) // load this wallet again
        }).catch(error => {
            throw (error);
        });
    };
}

export function clickReward(data) {
    return function (dispatch) {
        return transactionApi.clickTracking(data).then(rawRes => {
            const response = apiResult.success(rawRes);
            dispatch(loadWallet(getSecondPart(data.rewardWallet)))
        }).catch(error => {
            throw (error);
        });
    };
}

function getSecondPart(str) {
    return str.split('#')[1];
}
