import React from 'react';
// import {Route} from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import WalletPage from './components/gas/wallet/WalletPage';

export default (
    <BrowserRouter>
        <div>
            <Switch>
                <WalletPage exact path="/" />
            </Switch>
        </div>
    </BrowserRouter>
);
