import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainApp from './MainApp';
import AdAppearManager from './components/AdAppearManager';

export default (
    <BrowserRouter>
        <div>
            <Switch>
                <MainApp exact path="/" />
                <MainApp exact path="/ad-manager" page = 'adManager'/>
                <MainApp exact path="/fund" page = 'walletHome'/>
                <MainApp exact path="/referral" page = 'referral'/>
                <MainApp exact path="/articles/:location"/>
                <MainApp exact path="/:refId/:location"/>

                <Route exact path="/ads" component={AdAppearManager}/>
            </Switch>
        </div>
    </BrowserRouter>
);
