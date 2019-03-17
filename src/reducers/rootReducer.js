import {combineReducers} from 'redux';
import gasWallets from './gasWalletsReducer';
import gasWallet from './gasWalletReducer';
import advertiser from './advertiserReducer';
import adReports from './adReportsReducer';

const rootReducer = combineReducers({
    gasWallets,
    advertiser,
    gasWallet,
    adReports
});

export default rootReducer;
