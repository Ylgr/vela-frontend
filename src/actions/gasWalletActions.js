import * as types from './actionTypes';
import gasWalletApi from '../api/gasWalletApi';
import apiResult from '../api/apiResult';
import {loadAd} from './adActions';

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

export function loadPresentingWalletSuccess(presentingWallet) {
    return {type: types.LOAD_PRESENTING_WALLET_SUCCESS, presentingWallet}
}

export function loadPresentingAdAndWallet(){
    return function (dispatch) {
        gasWalletApi.getList().then(gasWallets => {
            const responseWallets = apiResult.success(gasWallets);
            const randomWallet = loadWalletHaveAds(responseWallets);
            dispatch(loadPresentingWalletSuccess(randomWallet));
            const randomAd = randomWallet.reports[Math.floor(Math.random() * randomWallet.reports.length)];
            dispatch(loadAd(getSecondPart(randomAd),true))
        })
    };
}

function loadWalletHaveAds(wallets) {
    const randomWallet = wallets[Math.floor(Math.random() * wallets.length)];
    if(typeof randomWallet.reports !== 'undefined') return randomWallet;
    else return loadWalletHaveAds(wallets);
}

function getSecondPart(str) {
    return str.split('#')[1];
}
