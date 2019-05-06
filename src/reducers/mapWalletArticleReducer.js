import * as type from '../actions/actionTypes';
import initialState from './initialState';

export default function MapWalletArticleReducer(state = initialState.mapWalletArticles, action) {
    switch (action.type) {
        case type.LOAD_MAP_WALLET_ARTICLE_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.mapWalletArticle)
            ];
        default:
            return state;
    }
}