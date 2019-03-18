import {combineReducers} from 'redux';
import gasWallets from './gasWalletsReducer';
import gasWallet from './gasWalletReducer';
import advertiser from './advertiserReducer';
import adReports from './adReportsReducer';
import presentingAd from './presentingAdReducer';
import presentingWallet from './presentingWalletReducer';

const rootReducer = combineReducers({
    gasWallets,
    advertiser,
    gasWallet,
    adReports,
    presentingAd,
    presentingWallet
});

export default rootReducer;
