import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Profile from "./Profile";

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

const renderComponent = (Component, isPrivate) => () => {
    if (isPrivate) {
        return isLogged ? <Component /> : <Redirect to="/" />
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