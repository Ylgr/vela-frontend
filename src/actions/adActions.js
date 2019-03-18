import * as types from "./actionTypes";
import adApi from "../api/adApi";
import apiResult from "../api/apiResult";
import {addReport} from "./gasWalletActions";

export function createAdSuccess(adReport) {
    return {type: types.CREATE_AD_SUCCESS, adReport}
}

export function createAd(data,walletId) {
    return function (dispatch) {
        return adApi.create(data).then(adInfo => {
            const response = apiResult.success(adInfo);
            dispatch(addReport(data.id,walletId));
            dispatch(createAdSuccess(response));
        }).catch(error => {
            throw (error);
        });
    };
}

export function loadAdSuccess(adReport) {
    return {type: types.LOAD_AD_SUCCESS, adReport}
}

export function loadAd(id){
    return function (dispatch) {
        return adApi.get(id).then(adReport => {
            const response = apiResult.success(adReport);
            console.log('loadAd: ',response);
            dispatch(loadAdSuccess(response));
        }).catch(error => {
            throw (error);
        });
    };
}
