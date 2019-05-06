import * as types from "./actionTypes";
import queryApi from "../api/queryApi";
import adApi from "../api/adApi";
import apiResult from "../api/apiResult";

export function loadMapWalletArticleSuccess(mapWalletArticle) {
    return {type: types.LOAD_MAP_WALLET_ARTICLE_SUCCESS,mapWalletArticle}
}
export function clearMapWalletArticleSuccess() {
    return {type: types.CLEAR_MAP_WALLET_ARTICLE_SUCCESS}
}

export function loadMapWalletArticle() {
    return function (dispatch) {
        // dispatch(clearMapWalletArticleSuccess());
        return queryApi.getRewardableWallet().then(res => {
            const wallets = apiResult.success(res);
            const adWallets = wallets.filter(wallet => {
                return typeof wallet.reports !== 'undefined'
            });
            adWallets.map(wallet => {
                wallet.reports.map(report => {
                    adApi.get(getSecondPart(report)).then(res => {
                        const adReport = apiResult.success(res);
                        console.log("adReport",adReport);
                        if(adReport.isActive === true){
                            const mapWalletArticle ={
                                "wallet" : wallet,
                                "article": adReport
                            };
                            dispatch(loadMapWalletArticleSuccess(mapWalletArticle))
                        }
                    });
                });
            })
        });
    };
}

function getSecondPart(str) {
    return str.split('#')[1];
}
