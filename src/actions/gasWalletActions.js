import * as types from './actionTypes';
import gasWalletApi from '../api/gasWalletApi';
import apiResult from '../api/apiResult';


export function loadWalletsSuccess(gasWallets) {
    return {type: types.LOAD_WALLETS_SUCCESS, gasWallets}
}

export function loadWallets() {
    return function (dispatch) {
        return gasWalletApi.getList().then(gasWallets => {
            const response = apiResult.success(gasWallets);
            dispatch(loadWalletsSuccess(response));
        }).catch(error => {
            throw (error);
        });
    };
}

export function loadWalletSuccess(gasWallet) {
    return {type: types.LOAD_WALLET_SUCCESS, gasWallet}
}

export function loadWallet(id) {
    return function (dispatch) {
        return gasWalletApi.get(id).then(gasWallet => {
            const response = apiResult.success(gasWallet);
            dispatch(loadWalletSuccess(response));
        }).catch(error => {
            throw (error);
        });
    };
}

export function addReportSuccess(gasWallet) {
    return {type: types.ADD_REPORT_SUCCESS, gasWallet}
}

export function addReport(adId,walletId){
    return function (dispatch) {
        const request = {
            "wallet": "resource:org.vela.gas.Gas#" + walletId,
            "report": "resource:org.vela.adReport.AdReport#" + adId
        };
        return gasWalletApi.addReport(request).then(gasWallet => {
            const response = apiResult.success(gasWallet);
            dispatch(addReportSuccess(response));
        }).catch(error => {
            throw (error);
        });
    };
}
