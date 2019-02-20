import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import routes from './routes';
import {loadWallets, loadWallet} from './actions/gasWalletActions';

const store = configureStore();
//store.dispatch(loadWallets());
//store.dispatch(loadWallet());

ReactDOM.render(
    <Provider store = {store}>
        {routes}
    </Provider>,
    document.getElementById('root')
);
