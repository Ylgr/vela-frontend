import * as types from "./actionTypes";
import systemApi from "../api/systemApi";
import apiResult from "../api/apiResult";

export function loadPingSuccess(ping) {
    return {type: types.LOAD_PING_SUCCESS,ping}
}

export function loadPing() {
    return function (dispatch) {
        return systemApi.getPing().then(ping => {
            const response = apiResult.success(ping);
            dispatch(loadPingSuccess(response));
        }).catch(error => {
            throw (error);
        });
    };
}

export function loadHistorianSuccess(historian) {
    return {type: types.LOAD_HISTORIAN_SUCCESS,historian}
}

export function loadHistorian() {
    return function (dispatch) {
        return systemApi.getHistorian().then(historian => {
            const response = apiResult.success(historian);
            dispatch(loadHistorianSuccess(response));
        }).catch(error => {
            throw (error);
        });
    };
}