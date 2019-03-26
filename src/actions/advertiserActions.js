import * as types from "./actionTypes";
import advertiserApi from "../api/advertiserApi";
import apiResult from "../api/apiResult";

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

export function createAdvertiser(hashRes) {
    return function (dispatch) {
        return advertiserApi.create(hashRes).then(advertiser => {
            const response = apiResult.success(advertiser);
            //dispatch(createAdvertiserSuccess(response));
        }).catch(error => {
            throw (error);
        });
    };
}
