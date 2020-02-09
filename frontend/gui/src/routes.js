import React from 'react';
import { Route } from 'react-router-dom';

import SoupList from './containers/SoupListView';
import SoupDetail from './containers/SoupDetailView';
import Login from './containers/Login';
import Signup from './containers/Signup';

const BaseRouter = () => (
    <div>
        <Route exact path= "/" component={SoupList} />
        <Route exact path= "/soups/:soupID/" component={SoupDetail} />
        <Route exact path= "/login/" component={Login} />
        <Route exact path= "/signup/" component={Signup} />
    </div>
);

export default BaseRouter;