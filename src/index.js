import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import routes from './routes';
import {loadWallet} from './actions/gasWalletActions';
import {createBrowserHistory} from 'history';

const browserHistory = createBrowserHistory();
const store = configureStore();
store.dispatch(loadWallet());

render(
    <Provider store = {store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
);
