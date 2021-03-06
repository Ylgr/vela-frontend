import * as type from '../actions/actionTypes';
import initialState from './initialState';

export default function ArticlesReducer(state = initialState.articles, action) {
    switch (action.type) {
        case type.LOAD_ACTIVE_ARTICLE_SUCCESS:
            return action.articles;
        default:
            return state;
    }
}