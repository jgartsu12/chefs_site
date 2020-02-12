import React from 'react';
import { Route } from 'react-router-dom';

import SoupDetail from './containers/SoupDetailView';
import SandwhichDetail from './containers/SandwhichDetailView';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Dashboard from './containers/Dash';

const BaseRouter = () => (
    <div>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/sandwhiches/:sandwhichID/" component={SandwhichDetail} /> 
        <Route exact path="/soups/:soupID/" component={SoupDetail} />
        <Route exact path="/login/" component={Login} />
        <Route exact path="/signup/" component={Signup} />
    </div>
);

export default BaseRouter;