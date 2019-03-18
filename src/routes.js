import React from 'react';
// import {Route} from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainApp from './MainApp';
import AdAppearManager from './components/AdAppearManager';

export default (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={MainApp}/>
                <Route exact path="/ads" component={AdAppearManager}/>
            </Switch>
        </div>
    </BrowserRouter>
);
