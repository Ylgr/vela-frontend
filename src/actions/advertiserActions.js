import * as types from "./actionTypes";
import advertiserApi from "../api/advertiserApi";
import apiResult from "../api/apiResult";
import { createWallet } from "./gasWalletActions";

export function loadAdvertiserSuccess(advertiser) {
    return {type: types.LOAD_ADVERTISER_SUCCESS, advertiser}
}

export function loadAdvertiser(id) {
    return function (dispatch) {
        return advertiserApi.get(id).then(advertiser => {
            const response = apiResult.success(advertiser)
            dispatch(loadAdvertiserSuccess(response));
        }).catch(error => {
            throw (error);
        });
    };
}

export function createAdvertiserSuccess(advertiser) {
    return {type: types.CREATE_ADVERTISER_SUCCESS, advertiser}
}

export function createAdvertiser(hashReq,walletId) {
    return function (dispatch) {
        return advertiserApi.create(hashReq).then(advertiser => {
            const resWallet = {
                "id": walletId
            };

            const response = apiResult.success(advertiser);
            dispatch(createAdvertiserSuccess(response));
            dispatch(createWallet(resWallet));
        }).catch(error => {
            throw (error);
        });
    };
}
