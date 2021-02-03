import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

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

const renderComponent = (Component, isPrivate) => {
    if (isPrivate) {
        return isLogged ? <Component /> : <Redirect to="/" />
    }
    return <Component />
}

const RouterOutlet = () => {
    const isLogged = useSelector(state => state.isLogged);
    return (
        <Router>
            <Switch>
                {
                    route.map((route, index) => {
                        return <Route key={index} path={route.path} exact={route.isExact} render={renderComponent(route.component, route.isPrivate, isLogged)} />
                    })
                }
            </Switch>
        </Router>
    )
}

export default RouterOutlet;