import {combineReducers} from 'redux';
import gasWallets from './gasWalletReducer';


const rootReducer = combineReducers({
    gasWallets
});

export default rootReducer;
