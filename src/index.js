import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import routes from './routes';
import {loadWallet} from './actions/gasWalletActions';

const store = configureStore();
store.dispatch(loadWallet());

ReactDOM.render(
    <Provider store = {store}>
        {routes}
    </Provider>,
    document.getElementById('root')
);
