import React from 'react';
// import {Route} from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainApp from './components/MainApp';
import WalletPage from './components/gas/wallet/WalletPage';

export default (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={MainApp}/>
                <Route path="/login" component={WalletPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);
