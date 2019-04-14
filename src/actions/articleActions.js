import * as types from "./actionTypes";
import articleApi from "../api/articleApi";
import apiResult from "../api/apiResult";

export function loadActiveArticleSuccess(articles) {
    return {type: types.LOAD_ACTIVE_ARTICLE_SUCCESS,articles}
}

export function loadActiveArticle() {
    return function (dispatch) {
        return articleApi.getAllActive().then(articles => {
            const response = apiResult.success(articles);
            dispatch(loadActiveArticleSuccess(response));
        }).catch(error => {
            throw (error);
        });
    };
}