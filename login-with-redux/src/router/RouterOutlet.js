import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../components/Home';
import Profile from '../components/Profile';
import NotFound from '../components/NotFound';

const route = [
    {
        path: "/",
        isExact: true,
        isPrivate: false,
        component: Home
    },
    {
        path: "/profile",
        isExact: false,
        isPrivate: true,
        component: Profile
    },
    {
        path: "*",
        isExact: true,
        isPrivate: false,
        component: NotFound
    }
];

const RouterOutlet = () => {
    return (
        <Router>
            <Switch>
                {
                    route.map((route, index) => {
                        return <Route key={index} path={route.path} exact={route.isExact} render={route.component} />
                    })
                }
            </Switch>
        </Router>
    )
}

export default RouterOutlet;