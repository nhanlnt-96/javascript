import { Redirect, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";

const routes = [
    {
        path: "/",
        isExact: true,
        isPrivate: false,
        component: Home
    },
    {
        path: "/profile",
        isPrivate: true,
        component: Profile
    },
    {
        path: "*",
        isExact: true,
        component: NotFound,
    }
];

const renderComponent = (Component, isPrivate, isAuth) => () => {
    if (isPrivate) {
        return isAuth ? <Component /> : <Redirect to="/" />
    }
    return <Component />;
}

const RouterOutlet = ({ isAuth }) => {
    return (
        <Router>
            <Switch>
                {
                    routes.map((route, index) => {
                        return <Route key={index}
                            path={route.path}
                            exact={route.isExact}
                            render={renderComponent(route.component, route.isPrivate, isAuth)}
                        />
                    })
                }
            </Switch>
        </Router>
    )
}

export default RouterOutlet;