import {combineReducers} from 'redux';
import gasWallets from './gasWalletsReducer';
import gasWallet from './gasWalletReducer';
import advertiser from './advertiserReducer';
import adReports from './adReportsReducer';
import presentingAd from './presentingAdReducer';
import presentingWallet from './presentingWalletReducer';
import articles from './articlesReducer';
import historian from './historianReducer';
import ping from './pingReducer';
import mapWalletArticles from './mapWalletArticleReducer';

const rootReducer = combineReducers({
    gasWallets,
    advertiser,
    gasWallet,
    adReports,
    presentingAd,
    presentingWallet,
    articles,
    historian,
    ping,
    mapWalletArticles
});

export default rootReducer;
