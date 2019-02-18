import {combineReducers} from 'redux';
import gasWallets from './gasWalletsReducer';
import gasWallet from './gasWalletReducer';


const rootReducer = combineReducers({
    gasWallets,
    gasWallet
});

export default rootReducer;
