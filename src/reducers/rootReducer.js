import {combineReducers} from 'redux';
import gasWallets from './gasWalletsReducer';
import gasWallet from './gasWalletReducer';
import advertiser from './advertiserReducer';


const rootReducer = combineReducers({
    gasWallets,
    advertiser,
    gasWallet
});

export default rootReducer;
